// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostCenterRuleRequestFilterExpressionFilterValues extends $dara.Model {
  /**
   * @remarks
   * The filter condition key.
   * 
   * @example
   * TAG-test-xxx-key
   */
  code?: string;
  /**
   * @remarks
   * The name of the filter condition key.
   * 
   * @example
   * None
   */
  codeName?: string;
  /**
   * @remarks
   * The association between code and value.
   * 
   * @example
   * IN
   */
  selectType?: string;
  /**
   * @remarks
   * The filter condition values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeName: 'CodeName',
      selectType: 'SelectType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeName: 'string',
      selectType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostCenterRuleRequestFilterExpression extends $dara.Model {
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * NARY
   */
  expressionType?: string;
  /**
   * @remarks
   * The sub-expression filter conditions.
   */
  filterValues?: DeleteCostCenterRuleRequestFilterExpressionFilterValues;
  /**
   * @remarks
   * The filter condition (no longer used).
   * 
   * @example
   * None
   */
  operand?: any;
  /**
   * @remarks
   * The conditional expressions.
   */
  operands?: any[];
  /**
   * @remarks
   * The relational expression.
   * 
   * @example
   * AND
   */
  operatorType?: string;
  static names(): { [key: string]: string } {
    return {
      expressionType: 'ExpressionType',
      filterValues: 'FilterValues',
      operand: 'Operand',
      operands: 'Operands',
      operatorType: 'OperatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionType: 'string',
      filterValues: DeleteCostCenterRuleRequestFilterExpressionFilterValues,
      operand: 'any',
      operands: { 'type': 'array', 'itemType': 'any' },
      operatorType: 'string',
    };
  }

  validate() {
    if(this.filterValues && typeof (this.filterValues as any).validate === 'function') {
      (this.filterValues as any).validate();
    }
    if(Array.isArray(this.operands)) {
      $dara.Model.validateArray(this.operands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCostCenterRuleRequest extends $dara.Model {
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
  filterExpression?: DeleteCostCenterRuleRequestFilterExpression;
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
      filterExpression: 'FilterExpression',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      filterExpression: DeleteCostCenterRuleRequestFilterExpression,
      nbid: 'string',
    };
  }

  validate() {
    if(this.filterExpression && typeof (this.filterExpression as any).validate === 'function') {
      (this.filterExpression as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

