// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonthlySlaListRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  ecIdAccountIds?: QueryMonthlySlaListRequestEcIdAccountIds[];
  /**
   * @example
   * ["instance_1","instance_2"]
   */
  instanceIds?: string[];
  /**
   * @example
   * [202602,202603]
   */
  months?: number[];
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  payStatuses?: number[];
  /**
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

