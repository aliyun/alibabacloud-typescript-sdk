// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMqttTraceDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621580400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The client ID of the device whose trace information you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the value of this parameter exceeds the total number of pages, an empty result is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621584000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. This value must match the instance ID that the client actually uses. You can view the instance ID in the **Basic Information** area on the **Instance Details** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the ApsaraMQ for MQTT instance. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The maximum number of MSMQ to display on each page for paging. Minimum value: 1. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to display the results in reverse chronological order. Valid values:
   * 
   * - **true**: Results are displayed in reverse chronological order of device activity time. The most recent device activity is displayed first, and the earliest device activity is displayed last.
   * 
   * - **false**: Results are displayed in chronological order of device activity time. The earliest device activity is displayed first, and the most recent device activity is displayed last.
   * 
   * If this parameter is not specified, results are displayed in chronological order by default.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      clientId: 'ClientId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      pageSize: 'PageSize',
      reverse: 'Reverse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      clientId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      pageSize: 'number',
      reverse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

