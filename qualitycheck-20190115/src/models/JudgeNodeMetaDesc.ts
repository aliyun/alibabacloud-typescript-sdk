// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JudgeNodeMetaDescExpressionMetaDesc extends $dara.Model {
  leftFieldType?: number;
  leftOperand?: string;
  operator?: string;
  rightFieldType?: number;
  rightOperand?: string;
  roundingMode?: string;
  static names(): { [key: string]: string } {
    return {
      leftFieldType: 'LeftFieldType',
      leftOperand: 'LeftOperand',
      operator: 'Operator',
      rightFieldType: 'RightFieldType',
      rightOperand: 'RightOperand',
      roundingMode: 'RoundingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leftFieldType: 'number',
      leftOperand: 'string',
      operator: 'string',
      rightFieldType: 'number',
      rightOperand: 'string',
      roundingMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JudgeNodeMetaDesc extends $dara.Model {
  /**
   * @remarks
   * Actual value
   * 
   * @example
   * xx
   */
  actualValue?: string;
  /**
   * @remarks
   * Data type
   * 
   * @example
   * 1
   */
  dataType?: number;
  expressionMetaDesc?: JudgeNodeMetaDescExpressionMetaDesc;
  /**
   * @remarks
   * System field
   * 
   * @example
   * remark1
   */
  field?: string;
  /**
   * @remarks
   * Field data source type: 1: System predefined field. 2: Quality inspection field for passed parameters.
   * 
   * @example
   * 1
   */
  fieldType?: number;
  /**
   * @remarks
   * Expression
   * 
   * @example
   * 1
   */
  symbol?: number;
  /**
   * @remarks
   * Preset value
   * 
   * @example
   * xxx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      dataType: 'DataType',
      expressionMetaDesc: 'ExpressionMetaDesc',
      field: 'Field',
      fieldType: 'FieldType',
      symbol: 'Symbol',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      dataType: 'number',
      expressionMetaDesc: JudgeNodeMetaDescExpressionMetaDesc,
      field: 'string',
      fieldType: 'number',
      symbol: 'number',
      value: 'string',
    };
  }

  validate() {
    if(this.expressionMetaDesc && typeof (this.expressionMetaDesc as any).validate === 'function') {
      (this.expressionMetaDesc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

