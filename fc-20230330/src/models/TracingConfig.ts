// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TracingConfig extends $dara.Model {
  /**
   * @remarks
   * The parameters of Managed Service for OpenTelemetry. Specify the value in the map[string]string format, where the key is "endpoint", and the value is the internal endpoint of Tracing Analysis. Example: endpoint: http://tracing-analysis-dc-hz.aliyuncs.com/adapt_xxx/api/otlp/traces.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The type of protocol for Managed Service for OpenTelemetry. Only Jaeger is supported.
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

