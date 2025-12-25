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
  actualValue?: string;
  dataType?: number;
  expressionMetaDesc?: JudgeNodeMetaDescExpressionMetaDesc;
  field?: string;
  fieldType?: number;
  symbol?: number;
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

