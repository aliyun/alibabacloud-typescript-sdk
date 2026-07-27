// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusMetricFilterValue extends $dara.Model {
  dim?: string;
  opt?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      opt: 'opt',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      opt: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

