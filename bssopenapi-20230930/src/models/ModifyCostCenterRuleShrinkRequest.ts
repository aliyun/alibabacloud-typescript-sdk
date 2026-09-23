// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostCenterRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The financial unit ID.
   * 
   * @example
   * 485938
   */
  costCenterId?: number;
  /**
   * @remarks
   * The rule expression.
   */
  filterExpressionShrink?: string;
  /**
   * @remarks
   * The primary sales channel ID. If left empty, the channel ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The owner of the financial unit. (Deprecated)
   * 
   * @example
   * 1234567812345678
   */
  ownerAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      filterExpressionShrink: 'FilterExpression',
      nbid: 'Nbid',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      filterExpressionShrink: 'string',
      nbid: 'string',
      ownerAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

