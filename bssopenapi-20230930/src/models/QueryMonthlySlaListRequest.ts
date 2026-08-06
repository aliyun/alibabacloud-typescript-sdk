// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonthlySlaListRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If this parameter is empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
   * 
   * @example
   * 1501603440974415
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMonthlySlaListRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The enterprise and account list. If this parameter is empty, the current account is queried.
   */
  ecIdAccountIds?: QueryMonthlySlaListRequestEcIdAccountIds[];
  /**
   * @remarks
   * Optional. Filter by instance ID.
   * 
   * @example
   * ["instance_1","instance_2"]
   */
  instanceIds?: string[];
  /**
   * @remarks
   * Optional. List of months in yyyyMM format.
   * 
   * @example
   * [202602,202603]
   */
  months?: number[];
  /**
   * @remarks
   * The primary marketplace ID. If this parameter is empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Optional. Filter by compensation status. Valid values: 0 and 1.
   */
  payStatuses?: number[];
  /**
   * @remarks
   * Optional. Filter by product code.
   * 
   * @example
   * ["ecs","oss"]
   */
  productCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ecIdAccountIds: 'EcIdAccountIds',
      instanceIds: 'InstanceIds',
      months: 'Months',
      nbid: 'Nbid',
      pageSize: 'PageSize',
      payStatuses: 'PayStatuses',
      productCodes: 'ProductCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': QueryMonthlySlaListRequestEcIdAccountIds },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      months: { 'type': 'array', 'itemType': 'number' },
      nbid: 'string',
      pageSize: 'number',
      payStatuses: { 'type': 'array', 'itemType': 'number' },
      productCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.months)) {
      $dara.Model.validateArray(this.months);
    }
    if(Array.isArray(this.payStatuses)) {
      $dara.Model.validateArray(this.payStatuses);
    }
    if(Array.isArray(this.productCodes)) {
      $dara.Model.validateArray(this.productCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

