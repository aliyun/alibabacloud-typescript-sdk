// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JudgeNodeMetaDescExpressionMetaDesc extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
   */
  leftFieldType?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
   */
  leftOperand?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
   */
  operator?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
   */
  rightFieldType?: number;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
   */
  rightOperand?: string;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
   */
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
   * The actual value. **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
   */
  actualValue?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * **[Deprecated]**
   */
  expressionMetaDesc?: JudgeNodeMetaDescExpressionMetaDesc;
  /**
   * @remarks
   * The system field.
   * 
   * @example
   * remark1
   */
  field?: string;
  /**
   * @remarks
   * The field data source type. 1: System predefined field. 2: Parameter-passed quality inspection field.
   * 
   * @example
   * 1
   */
  fieldType?: number;
  /**
   * @remarks
   * The logical expression.
   * 
   * @example
   * 1
   */
  symbol?: number;
  /**
   * @remarks
   * The preset value. **[Deprecated]**
   * 
   * @example
   * **[Deprecated]**
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

