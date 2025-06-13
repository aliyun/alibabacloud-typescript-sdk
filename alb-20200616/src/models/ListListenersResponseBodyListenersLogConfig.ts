// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig } from "./ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig";


export class ListListenersResponseBodyListenersLogConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether custom headers are carried in the access log. Valid values:
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
   * The configurations of xtrace.
   */
  accessLogTracingConfig?: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig;
  static names(): { [key: string]: string } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogTracingConfig: 'AccessLogTracingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogTracingConfig: ListListenersResponseBodyListenersLogConfigAccessLogTracingConfig,
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

