// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig } from "./GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig";


export class GetListenerAttributeResponseBodyLogConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether custom headers are recorded in the access log. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The configuration of Xtrace. Xtrace is used to record requests sent to ALB.
   */
  accessLogTracingConfig?: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: GetListenerAttributeResponseBodyLogConfigAccessLogTracingConfig,
    };
  }

  validate() {
    if(this.accessLogTracingConfig && typeof (this.accessLogTracingConfig as any).validate === 'function') {
      (this.accessLogTracingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

