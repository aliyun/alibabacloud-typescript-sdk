// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Xtrace is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > You can set this parameter to **true** only if the AccessLogEnabled parameter is set to true.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The sampling rate of Xtrace. Valid values: 1 to 10000.
   * 
   * > If **TracingEnabled** is set to **true**, this parameter is valid.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The Xtrace type. Supported Xtrace type: **Zipkin**.
   * 
   * > If **TracingEnabled** is set to **true**, this parameter is valid.
   * 
   * @example
   * Zipkin
   */
  tracingType?: string;
  static names(): { [key: string]: string } {
    return {
      tracingEnabled: 'TracingEnabled',
      tracingSample: 'TracingSample',
      tracingType: 'TracingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tracingEnabled: 'boolean',
      tracingSample: 'number',
      tracingType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

