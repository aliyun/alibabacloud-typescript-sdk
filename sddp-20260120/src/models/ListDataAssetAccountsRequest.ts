// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The database account name. The system filters accounts by the exact account name.
   * 
   * @example
   * app_reader
   */
  accountName?: string;
  /**
   * @remarks
   * The authentication database of the MongoDB account. This parameter is used to distinguish accounts with the same name in different authentication databases.
   * 
   * @example
   * admin
   */
  authDb?: string;
  /**
   * @remarks
   * The column encryption access permissions. Valid values:
   * - fullAccess: plaintext access
   * - restrictedAccess: restricted access
   * - noneAccess: decryption prohibited. This value applies only to ApsaraDB RDS for MySQL instances whose current effective key mode is client_key.
   * 
   * @example
   * fullAccess
   */
  authRole?: string;
  /**
   * @remarks
   * The business scenario for the query. Set this parameter to DataMasking for the column encryption scenario. Note that the value is case-sensitive.
   * 
   * @example
   * DataMasking
   */
  bizType?: string;
  /**
   * @remarks
   * The page number of the current page. Pages start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The database instance ID. You can obtain this value from the Items[].InstanceId parameter in the response of the ListDataMaskingInstances operation.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Keep other filter conditions consistent when querying the next page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud service code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two parameters must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The list of cloud service type IDs. Separate multiple values with commas (,). For the column encryption scenario, the valid values are 5 (RDS), 8 (POLARDB), and 27 (PolarDBX2).
   * 
   * @example
   * 5
   */
  productIds?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      authDb: 'AuthDb',
      authRole: 'AuthRole',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productIds: 'ProductIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      authDb: 'string',
      authRole: 'string',
      bizType: 'string',
      currentPage: 'number',
      instanceId: 'string',
      lang: 'string',
      pageSize: 'number',
      productCode: 'string',
      productIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

