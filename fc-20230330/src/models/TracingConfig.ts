// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TracingConfig extends $dara.Model {
  /**
   * @remarks
   * The tracing parameters. The parameter is a map[string]string, where the key is "endpoint" and the value is your Tracing Analysis internal network endpoint. Example: endpoint: http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxx/api/otlp/traces.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The Tracing Analysis protocol type. Currently, only Jaeger is supported.
   * 
   * @example
   * Jaeger
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

