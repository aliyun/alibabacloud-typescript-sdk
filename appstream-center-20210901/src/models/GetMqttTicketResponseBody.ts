// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMqttTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the request fails. For example, `Client.Forbidden` indicates that the client is forbidden from establishing a connection.
   * 
   * @example
   * Client.Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The expiration time of the MQTT connection password. It is returned as a string representing a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1794278400000
   */
  expireTimeStamp?: string;
  /**
   * @remarks
   * The error message returned when the request fails, which corresponds to the error code.
   * 
   * @example
   * Client forbidden connect
   */
  message?: string;
  /**
   * @remarks
   * The access endpoint for the MQTT client. Use the endpoint returned by this operation to establish a connection.
   * 
   * @example
   * mqtt.example.com
   */
  mqttEndpoint?: string;
  /**
   * @remarks
   * The MQTT group ID, used to concatenate the MQTT ClientId.
   * 
   * @example
   * GID_EXAMPLE
   */
  mqttGroupId?: string;
  /**
   * @remarks
   * The MQTT instance ID, used for token authentication.
   * 
   * @example
   * post-cn-7mz2****
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The password used to establish an MQTT connection. It consists of publish and subscribe tokens in the format of `W|PublishToken|R|SubscribeToken`. Use the complete password returned by the operation. The desensitized examples in the documentation cannot be used for connections.
   * 
   * @example
   * W|pubTokenExample****|R|subTokenExample****
   */
  mqttPassword?: string;
  /**
   * @remarks
   * The username used to establish an MQTT connection. The format is `Token|AccessKeyId|InstanceId`. AccessKeyId and InstanceId are identifiers used by the server to generate credentials. Use the complete username returned by the operation.
   * 
   * @example
   * Token|LTAI5tExample****|post-cn-7mz2****
   */
  mqttUsername?: string;
  /**
   * @remarks
   * The VPC access endpoint for MQTT, used by clients that meet the VPC network access requirements.
   * 
   * @example
   * mqtt-vpc.example.com
   */
  mqttVPCEndpoint?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B9E3F7B2-5B13-4A7B-8C36-6D1B0A8F0000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. `true` indicates success, and `false` indicates failure.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The topic list. Each list element contains `topic` (the topic name), `type` (the topic type), and `permission` (the permission). The list returned by this operation includes topics for publishing, tenant subscription, device subscription, and system subscription. The publish permission is `W`, and the subscribe permission is `R`.
   * 
   * @example
   * [{"topic":"pub/550e8400-e29b-41d4-a716-446655440000","type":"pub","permission":"W"},{"topic":"sub/ten/123456789012****","type":"sub-ten","permission":"R"},{"topic":"sub/uuid/550e8400-e29b-41d4-a716-446655440000","type":"sub-uuid","permission":"R"},{"topic":"sub/sys","type":"sub-sys","permission":"R"}]
   */
  topicList?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      expireTimeStamp: 'ExpireTimeStamp',
      message: 'Message',
      mqttEndpoint: 'MqttEndpoint',
      mqttGroupId: 'MqttGroupId',
      mqttInstanceId: 'MqttInstanceId',
      mqttPassword: 'MqttPassword',
      mqttUsername: 'MqttUsername',
      mqttVPCEndpoint: 'MqttVPCEndpoint',
      requestId: 'RequestId',
      success: 'Success',
      topicList: 'TopicList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      expireTimeStamp: 'string',
      message: 'string',
      mqttEndpoint: 'string',
      mqttGroupId: 'string',
      mqttInstanceId: 'string',
      mqttPassword: 'string',
      mqttUsername: 'string',
      mqttVPCEndpoint: 'string',
      requestId: 'string',
      success: 'string',
      topicList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

