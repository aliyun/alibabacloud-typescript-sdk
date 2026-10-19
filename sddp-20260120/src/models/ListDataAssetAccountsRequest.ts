// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The database account name. Filters by exact account name.
   * 
   * @example
   * app_reader
   */
  accountName?: string;
  /**
   * @remarks
   * The column encryption access permissions. Valid values:
   * 
   * - fullAccess: plaintext access.
   * - restrictedAccess: restricted access.
   * - noneAccess: decryption prohibited. noneAccess applies only to ApsaraDB RDS for MySQL instances whose current effective key pattern is client_key.
   * 
   * @example
   * fullAccess
   */
  authRole?: string;
  /**
   * @remarks
   * The query business scenario. Use DataMasking for the column encryption scenario. This value is case-sensitive.
   * 
   * @example
   * DataMasking
   */
  bizType?: string;
  /**
   * @remarks
   * The page number of the current query. Pages start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The database instance identity. You can obtain this value from Items[].InstanceId returned by ListDataMaskingInstances.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * 
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of records per page. Keep other filter conditions consistent when querying the next page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud product code. Column encryption supports RDS, POLARDB, and PolarDBX2. If ProductId is also specified, the two values must correspond to each other.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The list of cloud product type identifiers. Separate multiple values with commas (,). Valid values for the column encryption scenario: 5 (RDS), 8 (POLARDB), and 27 (PolarDBX2).
   * 
   * @example
   * 5
   */
  productIds?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
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

