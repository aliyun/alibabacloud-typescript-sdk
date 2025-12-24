// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVendorApiListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Alibaba Cloud product interface, supporting fuzzy search.
   * 
   * @example
   * AddAssetCleanConfig
   */
  apiName?: string;
  /**
   * @remarks
   * Keyword.
   * 
   * @example
   * Create
   */
  keyWord?: string;
  /**
   * @remarks
   * The current page number for pagination. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page when displaying paginated results. The default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Vendor\\"s product identifier:
   * - **waf**: Web Application Firewall.
   * - **cfw**: Cloud Firewall.
   * 
   * @example
   * waf
   */
  productCode?: string;
  /**
   * @remarks
   * Vendor code:
   * - **Tencent**: Tencent.
   * - **HUAWEICLOUD**: Huawei.
   * - **Azure**: Microsoft Azure.
   * - **AWS**: Amazon Web Services.
   * - **Chaitin**: Chaitin.
   * 
   * @example
   * Azure
   */
  vendorCode?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      keyWord: 'KeyWord',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      vendorCode: 'VendorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      keyWord: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productCode: 'string',
      vendorCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

