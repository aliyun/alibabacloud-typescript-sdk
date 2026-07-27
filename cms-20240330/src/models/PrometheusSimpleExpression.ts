// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusSimpleExpression extends $dara.Model {
  operator?: string;
  queryName?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      queryName: 'queryName',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

