// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorAccountAKListRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AK.
   * 
   * @example
   * 2624
   */
  authIds?: string;
  /**
   * @remarks
   * The page number of the current page during paging. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page during paging. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the AK. Valid values:
   * 
   * - **0**: Enabled.
   * - **1**: Disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The username of the sub-account of the cloud service provider to which the AK belongs.
   * 
   * @example
   * AlibabaCloud_***
   */
  subAccountName?: string;
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * - **Tencent**: Tencent Cloud.
   * - **HUAWEICLOUD**: Huawei Cloud.
   * - **Azure**: Azure.
   * - **AWS**: AWS.
   * - **VOLCENGINE**: Volcengine.
   * - **google**: Google Cloud.
   * - **CHAITIN**: Chaitin Tech.
   * - **FORTINET**: Fortinet.
   * - **THREATBOOK**: ThreatBook.
   * - **KingsoftCloud**: Kingsoft Cloud.
   * - **UCloud**: UCloud.
   * - **BaiduCloud**: Baidu AI Cloud.
   * - **WIZ**: Wiz.
   * - **OracleCloud**: Oracle Cloud.
   * - **StateCloud**: CTYun.
   * 
   * @example
   * VOLCENGINE
   */
  vendor?: string;
  /**
   * @remarks
   * The name of the AK account.
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
      vendor: 'Vendor',
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
      vendor: 'string',
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

