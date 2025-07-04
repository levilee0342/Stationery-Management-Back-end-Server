package com.project.stationery_be_server.dto.response;

import com.project.stationery_be_server.dto.response.product.ProductDetailResponse;
import com.project.stationery_be_server.entity.PurchaseOrder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PurchaseOrderResponse {
    private String purchaseOrderId;
    private Date createdAt;
    private String pdfUrl;
    private String productPromotionId;
    private String userPromotionId;
    private PurchaseOrder.Status status;
    private BigDecimal amount;
    private String note;
    private String cancelReason;
    private LocalDateTime expiredTime;

    private AddressResponse address;
    private List<ProductDetailResponse> productDetails;
    private List<PurchaseOrderDetailResponse> orderDetails;

    private String userId;
}