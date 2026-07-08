// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParentPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically enable the parent platform. Valid values:
   * - false (default)
   * - true.
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * Specifies whether to enable local authentication. Valid values:
   * - true (default)
   * - false.
   * 
   * @example
   * true
   */
  clientAuth?: boolean;
  /**
   * @remarks
   * The local password.
   * 
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @remarks
   * The local username.
   * 
   * @example
   * user01
   */
  clientUsername?: string;
  /**
   * @remarks
   * The description of the parent platform.
   * 
   * @example
   * 级联平台测试
   */
  description?: string;
  /**
   * @remarks
   * The national standard ID of the parent platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @remarks
   * The SIP service IP address of the parent platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * The name of the parent platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 级联平台测试
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The SIP service port of the parent platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 5060
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the parent platform. Valid values:
   * - gb28181: Chinese National Standard (GB28181).
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      clientPassword: 'ClientPassword',
      clientUsername: 'ClientUsername',
      description: 'Description',
      gbId: 'GbId',
      ip: 'Ip',
      name: 'Name',
      ownerId: 'OwnerId',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      clientAuth: 'boolean',
      clientPassword: 'string',
      clientUsername: 'string',
      description: 'string',
      gbId: 'string',
      ip: 'string',
      name: 'string',
      ownerId: 'number',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

