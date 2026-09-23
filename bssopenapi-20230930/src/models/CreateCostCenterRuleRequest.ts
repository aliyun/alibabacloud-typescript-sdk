// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostCenterRuleRequestFilterExpressionFilterValues extends $dara.Model {
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
   * The filter condition key name (deprecated).
   * 
   * @example
   * None
   */
  codeName?: string;
  /**
   * @remarks
   * The association between the code and value.
   * 
   * @example
   * IN
   */
  selectType?: string;
  /**
   * @remarks
   * The list of filter condition values.
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

export class CreateCostCenterRuleRequestFilterExpression extends $dara.Model {
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
   * The sub-condition filter.
   */
  filterValues?: CreateCostCenterRuleRequestFilterExpressionFilterValues;
  /**
   * @remarks
   * The filter condition (deprecated).
   * 
   * @example
   * None
   */
  operand?: any;
  /**
   * @remarks
   * The conditional expression.
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
      filterValues: CreateCostCenterRuleRequestFilterExpressionFilterValues,
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

export class CreateCostCenterRuleRequest extends $dara.Model {
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
  filterExpression?: CreateCostCenterRuleRequestFilterExpression;
  /**
   * @remarks
   * The level-1 marketplace ID. If left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2084210001
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
      filterExpression: CreateCostCenterRuleRequestFilterExpression,
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

