// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterShareRuleRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @remarks
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
  ecIdAccountIds?: QueryCostCenterShareRuleRequestEcIdAccountIds[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nYCisJwqt18pP5E9yb47iu
   */
  nextToken?: string;
  /**
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

