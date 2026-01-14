// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address that is probed.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic diagnostics feature. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  detectEnable?: boolean;
  /**
   * @remarks
   * Set the threshold that is used to trigger the automatic diagnostics feature. If the liveness of the origin in percentile drops below the specified threshold, the automatic diagnostics feature is triggered.
   * 
   * Valid values: **0** to **100**.
   * 
   * @example
   * 0
   */
  detectThreshold?: number;
  /**
   * @remarks
   * The number of times that the threshold must be reached before the automatic diagnostics feature is triggered.
   * 
   * Valid values: **1** to **20**.
   * 
   * @example
   * 1
   */
  detectTimes?: number;
  /**
   * @remarks
   * The ID of the listener that you want to modify. The listener runs the origin probing task.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
   * 
   * @example
   * { "http_method": "get","header": "key:asd","acceptable_response_code": "500","cert_verify": true }
   */
  optionsJson?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.
   * 
   * If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of the **DetectTimes** parameter, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate stays below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.
   * 
   * Unit: seconds. Valid values: **300** to **86400**.
   * 
   * @example
   * 300
   */
  silenceTime?: number;
  /**
   * @remarks
   * The ID of the origin probing task that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * sm-bp1fpdjfju9k8yr1y****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the origin probing task.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * task1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clientToken: 'ClientToken',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      silenceTime: 'SilenceTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clientToken: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      listenerId: 'string',
      optionsJson: 'string',
      regionId: 'string',
      silenceTime: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

