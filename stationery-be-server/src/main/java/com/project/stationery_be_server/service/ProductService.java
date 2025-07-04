package com.project.stationery_be_server.service;

import com.project.stationery_be_server.dto.request.DeleteProductRequest;
import com.project.stationery_be_server.dto.request.ProductFilterRequest;
import com.project.stationery_be_server.dto.request.UpdateProductRequest;
import com.project.stationery_be_server.dto.response.ColorSizeSlugResponse;
import com.project.stationery_be_server.dto.response.product.CreateProductRequest;
import com.project.stationery_be_server.dto.response.product.ProductDetailResponse;
import com.project.stationery_be_server.dto.response.product.ProductResponse;
import com.project.stationery_be_server.entity.Product;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;

public interface ProductService {
    // user
    Page<ProductResponse> getAllProductWithDefaultPD(Pageable pageable , ProductFilterRequest filter);
    Page<ProductResponse> getAllProductForAdmin(Pageable pageable , ProductFilterRequest filter);
    Page<ProductResponse> getAllProducts(Pageable pageable , ProductFilterRequest filter);
    List<ProductDetailResponse> getProductDetailByProduct(String productId);
    ProductResponse getProductDetail(String slug);
    List<ColorSizeSlugResponse> fetchColorSizeSlug(String slug);
    @Transactional
    void handleUpdateTotalProductRating(String productId, String type, Integer rating);
    void deleteProduct(DeleteProductRequest request);

    void createProduct(String document, MultipartHttpServletRequest files);

    ProductResponse updateProduct(UpdateProductRequest request);

    Boolean updateHiddenProduct(String productId, boolean isHidden);
    List<ProductResponse> getAllProductsForChatbot();
}
