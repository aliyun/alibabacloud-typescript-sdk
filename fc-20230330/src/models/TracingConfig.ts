// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TracingConfig extends $dara.Model {
  /**
   * @remarks
   * The parameters for Tracing Analysis. The value is a map[string]string where the key is "endpoint" and the value is the internal network endpoint for Tracing Analysis. For example: endpoint: http\\://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxx/api/otlp/traces.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The Protocol Type for Tracing Analysis. Only Jaeger is supported.
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

