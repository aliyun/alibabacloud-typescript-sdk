// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterRuleRequestEcIdAccountIds extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to access. If this parameter is left empty, all accounts under the current entity ID are selected.
   */
  accountIds?: number[];
  /**
   * @remarks
   * The enterprise entity ID.
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

export class QueryCostCenterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 597745
   */
  costCenterId?: number;
  /**
   * @remarks
   * The list of enterprises and accounts. If this parameter is left empty, the current account is queried.
   */
  ecIdAccountIds?: QueryCostCenterRuleRequestEcIdAccountIds[];
  /**
   * @remarks
   * The ID of the primary marketplace. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': QueryCostCenterRuleRequestEcIdAccountIds },
      nbid: 'string',
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

