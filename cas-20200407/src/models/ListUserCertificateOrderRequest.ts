// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserCertificateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword for fuzzy search. Matches the domain name or the corresponding resource ID.
   * 
   * @example
   * cert-instanceId
   */
  keyword?: string;
  /**
   * @remarks
   * The resource type. Default value: **CPACK**. Valid values:
   * 
   * - **CPACK**: resource virtual order. Only orders generated from quotas are returned.
   * - **BUY**: purchase order. Only orders generated from purchases are returned. You can ignore this type in most cases.
   * - **UPLOAD**: uploaded certificate. Only uploaded certificates are returned.
   * - **CERT**: certificate. Both issued certificates and uploaded certificates are returned.
   * 
   * @example
   * CPACK
   */
  orderType?: string;
  /**
   * @remarks
   * The resource group ID. You can obtain this ID by calling the [ListResources](https://help.aliyun.com/document_detail/2716559.html) operation.
   * 
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page in a paginated query. Default value: 50.
   * 
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * 
   * - **PAYED**: Pending application. Valid when OrderType is set to CPACK or BUY.
   * - **CHECKING**: Under review. Valid when OrderType is set to CPACK or BUY.
   * - **CHECKED_FAIL**: Review failed. Valid when OrderType is set to CPACK or BUY.
   * - **ISSUED**: Issued.
   * - **WILLEXPIRED**: About to expire.
   * - **EXPIRED**: Expired.
   * - **NOTACTIVATED**: Not activated. Valid when OrderType is set to CPACK or BUY.
   * - **REVOKED**: Revoked. Valid when OrderType is set to CPACK or BUY.
   * 
   * If OrderType is set to CERT or UPLOAD and Status is empty, valid certificates are returned by default, including issued and about-to-expire certificates. If OrderType is set to CPACK or BUY and Status is empty, all orders are returned by default.
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

