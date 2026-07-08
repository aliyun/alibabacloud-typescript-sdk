// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParentPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically enable the platform. Valid values:
   * - true
   * - false (default)
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * Specifies whether to enable local authentication. Valid values:
   * - true (default)
   * - false
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
   * 国标级联修改测试
   */
  description?: string;
  /**
   * @remarks
   * The GB ID of the parent platform.
   * 
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @remarks
   * The ID of the parent platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The SIP service IP of the parent platform.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * The name of the parent platform.
   * 
   * @example
   * 国标级联修改测试
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The SIP service port of the parent platform.
   * 
   * @example
   * 5060
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      clientPassword: 'ClientPassword',
      clientUsername: 'ClientUsername',
      description: 'Description',
      gbId: 'GbId',
      id: 'Id',
      ip: 'Ip',
      name: 'Name',
      ownerId: 'OwnerId',
      port: 'Port',
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
      id: 'string',
      ip: 'string',
      name: 'string',
      ownerId: 'number',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

