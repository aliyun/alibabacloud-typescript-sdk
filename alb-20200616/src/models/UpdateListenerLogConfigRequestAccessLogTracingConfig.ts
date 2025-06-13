// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateListenerLogConfigRequestAccessLogTracingConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the Xtrace feature. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > You can set this parameter to **true** only if the access log feature is enabled by specifying **AccessLogEnabled**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  tracingEnabled?: boolean;
  /**
   * @remarks
   * The sampling rate of the Xtrace feature.
   * 
   * Valid values: **1 to 10000**.
   * 
   * > This parameter takes effect only if you set **TracingEnabled** to **true**.
   * 
   * @example
   * 100
   */
  tracingSample?: number;
  /**
   * @remarks
   * The type of Xtrace. Set the value to **Zipkin**.
   * 
   * > This parameter takes effect only if you set **TracingEnabled** to **true**.
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

