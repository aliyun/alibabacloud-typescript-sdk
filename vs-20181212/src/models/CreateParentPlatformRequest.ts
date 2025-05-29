// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParentPlatformRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5060
   */
  port?: number;
  /**
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

