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

