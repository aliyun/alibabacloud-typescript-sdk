// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostCenterRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Financial unit ID.
   * 
   * @example
   * 637127
   */
  costCenterId?: number;
  /**
   * @remarks
   * Rule expression.
   * **This field does not need to be entered during the delete operation.**
   */
  filterExpressionShrink?: string;
  /**
   * @remarks
   * Level-1 marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      filterExpressionShrink: 'FilterExpression',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      filterExpressionShrink: 'string',
      nbid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

