// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMqttTraceMessageOfClientRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1618646400000
   */
  beginTime?: number;
  /**
   * @remarks
   * The client ID of the device whose messages you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test@@@producer
   */
  clientId?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. If the input parameter value is greater than the total number of pages, the returned result is empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1621591200000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section of the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-i7m26mf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the ApsaraMQ for MQTT instance resides. For more information, see [Endpoints](https://help.aliyun.com/document_detail/181438.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  mqttRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the returned results are displayed in reverse chronological order. Valid values:
   * 
   * *   **true**: The returned results are displayed in reverse order of the time when messages are sent or received. This means that the latest sent or received message is displayed as the first entry and the earliest sent or received message is displayed as the last entry.
   * *   **false**: The returned results are displayed in order of the time when messages are sent or received. This means that the earliest sent or received message is displayed as the first entry and the latest sent or received message is displayed as the last entry.
   * 
   * If this parameter is not specified, the returned results are displayed in order of the time when messages are sent or received.
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

