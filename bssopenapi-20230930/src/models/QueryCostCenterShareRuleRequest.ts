// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterShareRuleRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The ID of the enterprise entity.
   * 
   * This parameter is required.
   * 
   * @example
   * 1004064243473974
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

export class QueryCostCenterShareRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of enterprises and accounts. If empty, the current account is queried.
   */
  ecIdAccountIds?: QueryCostCenterShareRuleRequestEcIdAccountIds[];
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the primary sales channel. If empty, the sales channel ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * A reserved field.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nYCisJwqt18pP5E9yb47iu
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the user to whom the financial unit belongs.
   * 
   * @example
   * 1529600453335198
   */
  ownerAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIds: 'EcIdAccountIds',
      maxResults: 'MaxResults',
      nbid: 'Nbid',
      nextToken: 'NextToken',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIds: { 'type': 'array', 'itemType': QueryCostCenterShareRuleRequestEcIdAccountIds },
      maxResults: 'number',
      nbid: 'string',
      nextToken: 'string',
      ownerAccountId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

