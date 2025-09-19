// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorAccountAKListRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AccessKey pair.
   * 
   * @example
   * 2624
   */
  authIds?: string;
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
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values:
   * 
   * *   **0**: enabled
   * *   **1**: disabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The username of the sub-account of the cloud service provider to which the AccessKey pair belongs.
   * 
   * @example
   * AlibabaCloud_***
   */
  subAccountName?: string;
  /**
   * @remarks
   * The name of the AccessKey pair.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  static names(): { [key: string]: string } {
    return {
      authIds: 'AuthIds',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      status: 'Status',
      subAccountName: 'SubAccountName',
      vendorAuthAlias: 'VendorAuthAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authIds: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      status: 'number',
      subAccountName: 'string',
      vendorAuthAlias: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

