// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether xtrace is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  This parameter can be set to **true** only when the access log feature of ALB is enabled by setting **AccessLogEnabled** to true.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The sampling rate of xtrace. Valid values: **1 to 10000**.
   * 
   * >  This parameter takes effect when **TracingEnabled** is set to **true**.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The type of xtrace. The value is set to **Zipkin**.
   * 
   * >  This parameter takes effect when **TracingEnabled** is set to **true**.
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

