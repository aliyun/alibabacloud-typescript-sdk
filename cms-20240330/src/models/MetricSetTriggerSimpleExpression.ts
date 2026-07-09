// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricSetTriggerSimpleExpression extends $dara.Model {
  expressionType?: string;
  max?: number;
  min?: number;
  operator?: string;
  queryName?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      expressionType: 'expressionType',
      max: 'max',
      min: 'min',
      operator: 'operator',
      queryName: 'queryName',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionType: 'string',
      max: 'number',
      min: 'number',
      operator: 'string',
      queryName: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

