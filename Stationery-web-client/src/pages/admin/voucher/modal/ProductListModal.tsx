import React from 'react'
import { FaTimes, FaBox } from 'react-icons/fa'
import { Promotion } from '~/types/promotion'

interface ProductListModalProps {
  isOpen: boolean
  onClose: () => void
  promotion?: Promotion
}

const ProductListModal: React.FC<ProductListModalProps> = ({ isOpen, onClose, promotion }) => {
  if (!isOpen || !promotion) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
            <FaBox className='text-purple-600' />
            Target Products - {promotion.promoCode}
          </h2>
          <button onClick={onClose} className='text-gray-400 hover:text-gray-600 transition-colors'>
            <FaTimes size={20} />
          </button>
        </div>

        <div className='overflow-y-auto max-h-[60vh]'>
          {promotion.pd && promotion.pd.length > 0 ? (
            <div className='space-y-3'>
              <div className='text-sm text-gray-600 mb-4 flex items-center justify-between'>
                <span>Found {promotion.pd.length} product(s)</span>
                <span className='bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium'>
                  Total: {promotion.pd.length}
                </span>
              </div>

              {promotion.pd.map((product, index) => (
                <div
                  key={product.productDetailId}
                  className='border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors'
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0'>
                      <FaBox className='text-purple-600' size={16} />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='font-medium text-gray-800 truncate'>{product.name}</p>
                      <p className='text-sm text-gray-500'>ID: {product.productDetailId}</p>
                    </div>
                    <div className='text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full'>
                      #{index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-8 text-gray-500'>
              <FaBox size={48} className='mx-auto mb-4 text-gray-300' />
              <p className='text-lg font-medium'>No specific products targeted</p>
              <p className='text-sm'>This promotion applies to all products</p>
            </div>
          )}
        </div>

        <div className='flex justify-end mt-6 pt-4 border-t border-gray-200'>
          <button
            onClick={onClose}
            className='px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductListModal
