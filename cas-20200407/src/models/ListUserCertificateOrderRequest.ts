// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserCertificateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Performs a fuzzy query. The keyword can be a domain name or a resource ID.
   * 
   * @example
   * cert-instanceId
   */
  keyword?: string;
  /**
   * @remarks
   * The resource type. Default value: **CPACK**. Valid values:
   * 
   * - **CPACK**: An order for a resource plan. Only orders created from a resource plan are returned.
   * 
   * - **BUY**: A direct purchase. Only orders created from direct purchases are returned. You can ignore this type in most cases.
   * 
   * - **UPLOAD**: An uploaded certificate. Only uploaded certificates are returned.
   * 
   * - **CERT**: A certificate. Both issued and uploaded certificates are returned.
   * 
   * @example
   * CPACK
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information, see [ListResources](https://help.aliyun.com/document_detail/2716559.html).
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
   * The status of the order. Valid values:
   * 
   * - **PAYED**: The certificate is pending application. This value is valid only when OrderType is set to CPACK or BUY.
   * 
   * - **CHECKING**: The certificate is under review. This value is valid only when OrderType is set to CPACK or BUY.
   * 
   * - **CHECKED_FAIL**: The review failed. This value is valid only when OrderType is set to CPACK or BUY.
   * 
   * - **ISSUED**: The certificate is issued.
   * 
   * - **WILLEXPIRED**: The certificate is about to expire.
   * 
   * - **EXPIRED**: The certificate has expired.
   * 
   * - **NOTACTIVATED**: The certificate is not activated. This value is valid only when OrderType is set to CPACK or BUY.
   * 
   * - **REVOKED**: The certificate is revoked. This value is valid only when OrderType is set to CPACK or BUY.
   * 
   * If OrderType is CERT or UPLOAD and you leave this parameter empty, active certificates are returned by default. Active certificates are those in the ISSUED or WILLEXPIRED state. If OrderType is CPACK or BUY and you leave this parameter empty, all orders are returned by default.
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

