// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostCenterRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cost center ID.
   * 
   * @example
   * 637127
   */
  costCenterId?: number;
  /**
   * @remarks
   * The rule expression.
   * **This field does not need to be specified for delete operations.**
   */
  filterExpressionShrink?: string;
  /**
   * @remarks
   * The primary marketplace ID. If left empty, the marketplace ID of the current user is used by default.
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

