// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParentPlatformRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @example
   * true
   */
  clientAuth?: boolean;
  /**
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @example
   * user01
   */
  clientUsername?: string;
  description?: string;
  /**
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * 10.10.10.10
   */
  ip?: string;
  name?: string;
  ownerId?: number;
  /**
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

