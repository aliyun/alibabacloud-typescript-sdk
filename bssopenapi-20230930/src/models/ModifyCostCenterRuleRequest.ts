// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostCenterRuleRequestFilterExpressionFilterValues extends $dara.Model {
  /**
   * @remarks
   * Condition filter key
   * 
   * @example
   * TAG-test-xxx-key
   */
  code?: string;
  /**
   * @remarks
   * Condition filter key name (deprecated)
   * 
   * @example
   * 无
   */
  codeName?: string;
  /**
   * @remarks
   * Association between code and value
   * 
   * @example
   * IN
   */
  selectType?: string;
  /**
   * @remarks
   * Condition filter value list
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

export class ModifyCostCenterRuleRequestFilterExpression extends $dara.Model {
  /**
   * @remarks
   * Operation type
   * 
   * @example
   * NARY
   */
  expressionType?: string;
  /**
   * @remarks
   * Sub-condition filter
   */
  filterValues?: ModifyCostCenterRuleRequestFilterExpressionFilterValues;
  /**
   * @remarks
   * Filter condition (deprecated)
   * 
   * @example
   * 无
   */
  operand?: any;
  /**
   * @remarks
   * Condition expression
   */
  operands?: any[];
  /**
   * @remarks
   * Relational expression
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
      filterValues: ModifyCostCenterRuleRequestFilterExpressionFilterValues,
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

export class ModifyCostCenterRuleRequest extends $dara.Model {
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
  filterExpression?: ModifyCostCenterRuleRequestFilterExpression;
  /**
   * @remarks
   * Level-1 marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * Owner of the financial unit (deprecated)
   * 
   * @example
   * 1234567812345678
   */
  ownerAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      filterExpression: 'FilterExpression',
      nbid: 'Nbid',
      ownerAccountId: 'OwnerAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      filterExpression: ModifyCostCenterRuleRequestFilterExpression,
      nbid: 'string',
      ownerAccountId: 'number',
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

