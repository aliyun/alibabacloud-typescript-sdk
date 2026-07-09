// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterRuleResponseBodyFilterExpressionFilterValues extends $dara.Model {
  /**
   * @remarks
   * The condition filter key.
   * 
   * @example
   * TAG-test-xxx-key
   */
  code?: string;
  /**
   * @remarks
   * The condition filter key name (deprecated).
   * 
   * @example
   * 无
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
   * The attribute value types corresponding to the module code. Valid values:
   * - single_float: single value type.
   * - range_float: range value type.
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

export class QueryCostCenterRuleResponseBodyFilterExpression extends $dara.Model {
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
  filterValues?: QueryCostCenterRuleResponseBodyFilterExpressionFilterValues;
  /**
   * @remarks
   * The filter condition (deprecated).
   * 
   * @example
   * 无
   */
  operand?: any;
  /**
   * @remarks
   * The condition expression.
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
      filterValues: QueryCostCenterRuleResponseBodyFilterExpressionFilterValues,
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

export class QueryCostCenterRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cost center ID.
   * 
   * @example
   * 597745
   */
  costCenterId?: number;
  /**
   * @remarks
   * The rule expression.
   */
  filterExpression?: QueryCostCenterRuleResponseBodyFilterExpression;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * Tue Nov 12 14:49:43 CST 2024
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * Wed Oct 16 10:15:37 CST 2024
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the cost center auto-allocation rule.
   * 
   * @example
   * 32048
   */
  id?: number;
  /**
   * @remarks
   * The deletion status. Valid values:
   * * **0**: active.
   * * **1**: inactive.
   * 
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @remarks
   * Response structure metadata.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The owner user of the cost center.
   * 
   * @example
   * 1977800748053695
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @remarks
   * The root cost center ID.
   * 
   * @example
   * 0
   */
  rootCostCenterId?: number;
  /**
   * @remarks
   * The status. Valid values:
   * - on: active.
   * - off: inactive.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'CostCenterId',
      filterExpression: 'FilterExpression',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isDeleted: 'IsDeleted',
      metadata: 'Metadata',
      ownerAccountId: 'OwnerAccountId',
      requestId: 'RequestId',
      rootCostCenterId: 'RootCostCenterId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'number',
      filterExpression: QueryCostCenterRuleResponseBodyFilterExpression,
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isDeleted: 'number',
      metadata: 'any',
      ownerAccountId: 'number',
      requestId: 'string',
      rootCostCenterId: 'number',
      status: 'string',
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

