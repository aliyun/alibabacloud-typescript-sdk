// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveNotificationRegistrationRequest extends $dara.Model {
  /**
   * @example
   * *********************
   */
  accessKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq-cn-qs359twhu02.cn-shanghai.rmq.aliyuncs.com:8080
   */
  accessPoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ENDPOINT
   */
  accessPointType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USERNAME_PASSWORD
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b3865dc3-4fa-4fd-9f4-dc7cda305a24
   */
  instanceId?: string;
  /**
   * @example
   * rmq-cn-qs359twhu02
   */
  mqInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ROCKET_MQ_5
   */
  mqType?: string;
  /**
   * @example
   * *********************
   */
  password?: string;
  /**
   * @example
   * *********************
   */
  secretKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @example
   * *********************
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessPoint: 'AccessPoint',
      accessPointType: 'AccessPointType',
      authType: 'AuthType',
      instanceId: 'InstanceId',
      mqInstanceId: 'MqInstanceId',
      mqType: 'MqType',
      password: 'Password',
      secretKey: 'SecretKey',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessPoint: 'string',
      accessPointType: 'string',
      authType: 'string',
      instanceId: 'string',
      mqInstanceId: 'string',
      mqType: 'string',
      password: 'string',
      secretKey: 'string',
      topic: 'string',
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

