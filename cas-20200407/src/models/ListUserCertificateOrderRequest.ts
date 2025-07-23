// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserCertificateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The domain name that is bound or the ID of the resource. Fuzzy match is supported.
   * 
   * @example
   * cert-instanceId
   */
  keyword?: string;
  /**
   * @remarks
   * The type of the order. Default value: **CPACK**. Valid values:
   * 
   * *   **CPACK**: virtual resource order. If you set OrderType to CPACK, only the information about orders that are generated to consume the certificate quota is returned.
   * *   **BUY**: purchase order. If you set OrderType to BUY, only the information about purchase orders is returned. In most cases, this type of order can be ignored.
   * *   **UPLOAD**: uploaded certificate. If you set OrderType to UPLOAD, only uploaded certificates are returned.
   * *   **CERT**: certificate. If you set OrderType to CERT, both issued certificates and uploaded certificates are returned.
   * 
   * @example
   * CPACK
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the resource group. You can call the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation to obtain the ID.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The certificate status of the order. Valid values:
   * 
   * *   **PAYED**: pending application. You can set Status to PAYED only if you set OrderType to CPACK or BUY.
   * *   **CHECKING**: validating. You can set Status to CHECKING only if you set OrderType to CPACK or BUY.
   * *   **CHECKED_FAIL**: validation failed. You can set Status to CHECKED_FAIL only if you set OrderType to CPACK or BUY.
   * *   **ISSUED**: issued.
   * *   **WILLEXPIRED**: about to expire.
   * *   **EXPIRED**: expired.
   * *   **NOTACTIVATED**: not activated. You can set Status to NOTACTIVATED only if you set OrderType to CPACK or BUY.
   * *   **REVOKED**: revoked. You can set Status to REVOKED only if you set OrderType to CPACK or BUY.
   * 
   * If you set OrderType to CERT or UPLOAD and Status is left empty, valid certificates are returned by default, including issued certificates and certificates that are about to expire. If you set OrderType to CPACK or BUY and Status is left empty, all orders are returned by default.
   * 
   * @example
   * ISSUED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      keyword: 'string',
      orderType: 'string',
      resourceGroupId: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

