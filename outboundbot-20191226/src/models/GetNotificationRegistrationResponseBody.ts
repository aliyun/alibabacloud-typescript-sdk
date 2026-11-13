// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotificationRegistrationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID for message queue access authentication.
   * 
   * @example
   * *********************
   */
  accessKey?: string;
  /**
   * @remarks
   * The access point of the message queue.
   * 
   * @example
   * rmq-cn-pd24po6ds06.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  accessPoint?: string;
  /**
   * @remarks
   * The access point type.
   * 
   * @example
   * ENDPOINT
   */
  accessPointType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the device currently belongs.
   * 
   * @example
   * 1927084019820962
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * USERNAME_PASSWORD
   */
  authType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1735660800000
   */
  createdTime?: string;
  /**
   * @remarks
   * The task group ID.
   * 
   * @example
   * a5207fec-0732-4160-89c0-e660b353102a
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 7f04f92c-ccfc-4f8f-a816-6902023be5c6
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance ID of the MSMQ.
   * 
   * @example
   * rmq-cn-3g84vpf3712
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * The MSMQ type.
   * 
   * @example
   * ROCKET_MQ_4
   */
  mqType?: string;
  /**
   * @remarks
   * The password for Message Queue authentication.
   * 
   * @example
   * *********************
   */
  password?: string;
  /**
   * @remarks
   * The producer ID.
   * 
   * @example
   * 9142e041-e83c-4f82-9e39-43c4b39caef1
   */
  producerId?: string;
  /**
   * @remarks
   * The AccessKey secret for message queue access authentication.
   * 
   * @example
   * *********************
   */
  secretKey?: string;
  /**
   * @remarks
   * The topic.
   * 
   * @example
   * OUTBOUND_BOT_TOPIC
   */
  topic?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1786085104904
   */
  updatedTime?: string;
  /**
   * @remarks
   * The username for Message Queue authentication.
   * 
   * @example
   * user_example
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessPoint: 'AccessPoint',
      accessPointType: 'AccessPointType',
      aliyunUid: 'AliyunUid',
      authType: 'AuthType',
      createdTime: 'CreatedTime',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      mqInstanceId: 'MqInstanceId',
      mqType: 'MqType',
      password: 'Password',
      producerId: 'ProducerId',
      secretKey: 'SecretKey',
      topic: 'Topic',
      updatedTime: 'UpdatedTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessPoint: 'string',
      accessPointType: 'string',
      aliyunUid: 'string',
      authType: 'string',
      createdTime: 'string',
      groupId: 'string',
      instanceId: 'string',
      mqInstanceId: 'string',
      mqType: 'string',
      password: 'string',
      producerId: 'string',
      secretKey: 'string',
      topic: 'string',
      updatedTime: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotificationRegistrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: GetNotificationRegistrationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The API message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetNotificationRegistrationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

