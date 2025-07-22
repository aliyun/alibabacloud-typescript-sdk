// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountPayRelationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 32812132121
   */
  accountId?: string;
  /**
   * @example
   * 云某的名称
   */
  accountName?: string;
  /**
   * @example
   * 213231232
   */
  ecid?: string;
  /**
   * @example
   * 2024-12-01 12:00:10
   */
  effectiveTime?: string;
  /**
   * @example
   * 123231213
   */
  fundAccountId?: string;
  /**
   * @example
   * 312328912
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @example
   * 2025-01-01 12:12:12
   */
  ineffectiveTime?: string;
  /**
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @example
   * 云某的名称
   */
  operatorName?: string;
  /**
   * @example
   * 1232343423
   */
  operatorNo?: string;
  /**
   * @example
   * aliyun_pk
   */
  operatorType?: string;
  /**
   * @example
   * PAYMENT
   */
  relationType?: string;
  /**
   * @example
   * 26842
   */
  site?: string;
  /**
   * @example
   * valid
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      ecid: 'Ecid',
      effectiveTime: 'EffectiveTime',
      fundAccountId: 'FundAccountId',
      fundAccountOwnerAccountId: 'FundAccountOwnerAccountId',
      ineffectiveTime: 'IneffectiveTime',
      nbid: 'Nbid',
      operatorName: 'OperatorName',
      operatorNo: 'OperatorNo',
      operatorType: 'OperatorType',
      relationType: 'RelationType',
      site: 'Site',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      ecid: 'string',
      effectiveTime: 'string',
      fundAccountId: 'string',
      fundAccountOwnerAccountId: 'string',
      ineffectiveTime: 'string',
      nbid: 'string',
      operatorName: 'string',
      operatorNo: 'string',
      operatorType: 'string',
      relationType: 'string',
      site: 'string',
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

export class ListFundAccountPayRelationResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListFundAccountPayRelationResponseBodyData[];
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      metadata: 'Metadata',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListFundAccountPayRelationResponseBodyData },
      metadata: 'any',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

