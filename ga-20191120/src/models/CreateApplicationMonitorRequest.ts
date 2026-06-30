// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA) instance to be probed.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The URL or IP address to be probed.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of a request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the automatic diagnostics feature. Valid values:
   * 
   * - **true**
   * 
   * - **false** (default)
   * 
   * @example
   * false
   */
  detectEnable?: boolean;
  /**
   * @remarks
   * The threshold that triggers automatic diagnostics. Unit: %.
   * 
   * Valid values: **0** to **100**.
   * 
   * Default value: **0**, which indicates that automatic diagnostics is not triggered.
   * 
   * @example
   * 0
   */
  detectThreshold?: number;
  /**
   * @remarks
   * The number of times that the threshold must be reached to trigger automatic diagnostics.
   * 
   * Valid values: **1** to **20**. Default value: **1**.
   * 
   * @example
   * 1
   */
  detectTimes?: number;
  /**
   * @remarks
   * The instance ID of the listener to be probed.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The advanced extension options for the listener protocol type of the origin probing task. Different listener protocol types correspond to different extension options.
   * 
   * @example
   * { "http_method": "get","header": "key:asd","acceptable_response_code": "500","cert_verify": true }
   */
  optionsJson?: string;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The silence period for automatic diagnostics. This parameter specifies the interval between two consecutive automatic diagnostics when the availability does not recover to normal after automatic diagnostics is triggered.
   * 
   * When the availability is consecutively below the automatic diagnostics threshold for the specified number of times (the value of **DetectTimes**), automatic diagnostics is triggered. If the availability remains below the threshold during the silence period, automatic diagnostics is not triggered again within the silence period. If the availability has not recovered after the silence period, automatic diagnostics is triggered again.
   * 
   * Unit: seconds. Valid values: **300** to **86400**. Default value: **300**.
   * 
   * @example
   * 300
   */
  silenceTime?: number;
  /**
   * @remarks
   * The name of the origin probing task.
   * 
   * The name must be 1 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      clientToken: 'ClientToken',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      silenceTime: 'SilenceTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      clientToken: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      listenerId: 'string',
      optionsJson: 'string',
      regionId: 'string',
      silenceTime: 'number',
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

