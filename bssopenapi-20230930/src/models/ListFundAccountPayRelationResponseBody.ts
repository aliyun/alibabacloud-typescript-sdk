// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountPayRelationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account ID of the user associated with the payment relationship, that is, the account that uses this account for payment.
   * 
   * @example
   * 32812132121
   */
  accountId?: string;
  /**
   * @remarks
   * The user name.
   * 
   * @example
   * 云某的名称
   */
  accountName?: string;
  /**
   * @remarks
   * The enterprise entity ID of the user associated with the payment relationship.
   * 
   * @example
   * 213231232
   */
  ecid?: string;
  /**
   * @remarks
   * The time when the payment relationship takes effect.
   * 
   * @example
   * 2024-12-01 12:00:10
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 123231213
   */
  fundAccountId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the account owner.
   * 
   * @example
   * 312328912
   */
  fundAccountOwnerAccountId?: string;
  /**
   * @remarks
   * The time when the payment relationship expires.
   * 
   * @example
   * 2025-01-01 12:12:12
   */
  ineffectiveTime?: string;
  /**
   * @remarks
   * The primary marketplace.
   * 
   * @example
   * 2684210001
   */
  nbid?: string;
  /**
   * @remarks
   * The operator name.
   * When the operator type is aliyun_pk, the operator name is the Alibaba Cloud nickname.
   * When the operator type is system, the operator name is "Alibaba Cloud assistant".
   * 
   * @example
   * 云某的名称
   */
  operatorName?: string;
  /**
   * @remarks
   * The authorized operator.
   * When the operator type is aliyun_pk, operatorNo is the Alibaba Cloud account ID.
   * 
   * @example
   * 1232343423
   */
  operatorNo?: string;
  /**
   * @remarks
   * The type of the authorized operator.
   * aliyun_pk: user.
   * system: Alibaba Cloud system.
   * 
   * @example
   * aliyun_pk
   */
  operatorType?: string;
  /**
   * @remarks
   * The relationship type, which can be collection relationship or payment relationship.
   * 
   * @example
   * PAYMENT
   */
  relationType?: string;
  /**
   * @remarks
   * The site.
   * 
   * @example
   * 26842
   */
  site?: string;
  /**
   * @remarks
   * The relationship status.
   * valid: valid.
   * expired: invalid.
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data list.
   */
  data?: ListFundAccountPayRelationResponseBodyData[];
  /**
   * @remarks
   * The response metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

