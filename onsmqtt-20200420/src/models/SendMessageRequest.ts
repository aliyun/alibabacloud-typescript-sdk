// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance. The ID must be consistent with the ID of the instance that the ApsaraMQ for MQTT client uses. You can view the instance ID in the **Basic Information** section on the **Instance Details** page that corresponds to the instance in the [ApsaraMQ for MQTT console](https://mqtt.console.aliyun.com).
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-0pp12gl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The topic to which you want to send a message on the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA
   */
  mqttTopic?: string;
  /**
   * @remarks
   * The message content, which is the payload of the message. We recommend that you encode the content in Base64 to prevent non-printable characters from being transmitted.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mqttTopic: 'MqttTopic',
      payload: 'Payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mqttTopic: 'string',
      payload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

