// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostCenterRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Financial unit ID
   * 
   * @example
   * 485938
   */
  costCenterId?: number;
  /**
   * @remarks
   * Rule expression
   */
  filterExpressionShrink?: string;
  /**
   * @remarks
   * First-level marketplace ID. If left empty, the ID of the marketplace to which the current user belongs is used by default.
   * 
   * @example
   * 2084210001
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

