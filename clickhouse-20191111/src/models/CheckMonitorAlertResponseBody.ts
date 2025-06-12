// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckMonitorAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameters that are used to configure the monitoring and alerting feature.
   * 
   * @example
   * {   "monitor":{     "key1":"value1",     "key2":"value2"   },   "alert":{     "key1":"value1",     "key2":"value2"   } }
   */
  parameter?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94F92113-FF63-5E57-8401-6FE123AD11DD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the monitoring and alerting feature is enabled. Valid values:
   * 
   * *   **enable**: The monitoring and alerting feature is enabled.
   * *   **disable**: The monitoring and alerting feature is disabled.
   * 
   * @example
   * enable
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

