// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationMonitorResponseBodyIspCityList extends $dara.Model {
  /**
   * @remarks
   * The ID of the city in which the probe point of the ISP is deployed.
   * 
   * @example
   * 375
   */
  city?: string;
  /**
   * @remarks
   * The name of the city in which the probe point of the ISP is deployed.
   * 
   * @example
   * Singapore
   */
  cityName?: string;
  /**
   * @remarks
   * The probe point ID of the ISP.
   * 
   * @example
   * 465
   */
  isp?: string;
  /**
   * @remarks
   * The probe point name of the ISP.
   * 
   * @example
   * Alibaba
   */
  ispName?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      cityName: 'CityName',
      isp: 'Isp',
      ispName: 'IspName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      cityName: 'string',
      isp: 'string',
      ispName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance on which the origin probing task ran.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The URL or IP address that was probed.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * Indicates whether the automatic diagnostics feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  detectEnable?: boolean;
  /**
   * @remarks
   * The threshold that is used to trigger automatic diagnostics.
   * 
   * If the availability of the origin server drops below the specified threshold, the automatic diagnostics feature is triggered.
   * 
   * @example
   * 0
   */
  detectThreshold?: number;
  /**
   * @remarks
   * The number of times that are required to reach the threshold before the automatic diagnostics feature is triggered.
   * 
   * @example
   * 1
   */
  detectTimes?: number;
  /**
   * @remarks
   * The probe points of the Internet service provider (ISP).
   */
  ispCityList?: DescribeApplicationMonitorResponseBodyIspCityList[];
  /**
   * @remarks
   * The ID of the listener on which the origin probing task ran.
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
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The silence period of the automatic diagnostics feature. This parameter indicates the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers automatic diagnostics, GA must wait until the silence period ends before GA can trigger another automatic diagnostic.
   * 
   * If the number of consecutive times that the availability rate drops below the automatic diagnostics threshold reaches the value of **DetectTimes**, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period regardless of whether the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.
   * 
   * Unit: seconds.
   * 
   * @example
   * 300
   */
  silenceTime?: number;
  /**
   * @remarks
   * The status of the origin probing task. Valid values:
   * 
   * *   **init**
   * *   **active**
   * *   **updating**
   * *   **inactive**
   * *   **deleting**
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The ID of the origin probing task.
   * 
   * @example
   * sm-bp1fpdjfju9k8yr1y****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the origin probing task.
   * 
   * @example
   * task1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      address: 'Address',
      detectEnable: 'DetectEnable',
      detectThreshold: 'DetectThreshold',
      detectTimes: 'DetectTimes',
      ispCityList: 'IspCityList',
      listenerId: 'ListenerId',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      requestId: 'RequestId',
      silenceTime: 'SilenceTime',
      state: 'State',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      detectEnable: 'boolean',
      detectThreshold: 'number',
      detectTimes: 'number',
      ispCityList: { 'type': 'array', 'itemType': DescribeApplicationMonitorResponseBodyIspCityList },
      listenerId: 'string',
      optionsJson: 'string',
      regionId: 'string',
      requestId: 'string',
      silenceTime: 'number',
      state: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ispCityList)) {
      $dara.Model.validateArray(this.ispCityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

