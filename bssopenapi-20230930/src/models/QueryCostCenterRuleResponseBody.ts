// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterRuleResponseBodyFilterExpressionFilterValues extends $dara.Model {
  /**
   * @example
   * TAG-test-xxx-key
   */
  code?: string;
  codeName?: string;
  /**
   * @example
   * IN
   */
  selectType?: string;
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
   * @example
   * NARY
   */
  expressionType?: string;
  filterValues?: QueryCostCenterRuleResponseBodyFilterExpressionFilterValues;
  operand?: any;
  operands?: any[];
  /**
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
   * @example
   * 597745
   */
  costCenterId?: number;
  filterExpression?: QueryCostCenterRuleResponseBodyFilterExpression;
  /**
   * @example
   * Tue Nov 12 14:49:43 CST 2024
   */
  gmtCreate?: string;
  /**
   * @example
   * Wed Oct 16 10:15:37 CST 2024
   */
  gmtModified?: string;
  /**
   * @example
   * 32048
   */
  id?: number;
  /**
   * @example
   * false
   */
  isDeleted?: number;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 1977800748053695
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * UUID
   */
  requestId?: string;
  /**
   * @example
   * 0
   */
  rootCostCenterId?: number;
  /**
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

