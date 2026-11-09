// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMqttTraceMessagePublishRequest extends $dara.Model {
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
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the ApsaraMQ for MQTT console.
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
   * The message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AC1EC0030EAB78308DB16A3EC773****
   */
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      mqttRegionId: 'MqttRegionId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      mqttRegionId: 'string',
      msgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

