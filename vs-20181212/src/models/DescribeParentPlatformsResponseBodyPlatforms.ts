// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformsResponseBodyPlatforms extends $dara.Model {
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
   * 31010*****317542006
   */
  clientGbId?: string;
  /**
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
  /**
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @example
   * 5160
   */
  clientPort?: number;
  /**
   * @example
   * user01
   */
  clientUsername?: string;
  /**
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  description?: string;
  /**
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
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
  /**
   * @example
   * 5060
   */
  port?: number;
  /**
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoStart: 'AutoStart',
      clientAuth: 'ClientAuth',
      clientGbId: 'ClientGbId',
      clientIp: 'ClientIp',
      clientPassword: 'ClientPassword',
      clientPort: 'ClientPort',
      clientUsername: 'ClientUsername',
      createdTime: 'CreatedTime',
      description: 'Description',
      gbId: 'GbId',
      id: 'Id',
      ip: 'Ip',
      name: 'Name',
      port: 'Port',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoStart: 'boolean',
      clientAuth: 'boolean',
      clientGbId: 'string',
      clientIp: 'string',
      clientPassword: 'string',
      clientPort: 'number',
      clientUsername: 'string',
      createdTime: 'string',
      description: 'string',
      gbId: 'string',
      id: 'string',
      ip: 'string',
      name: 'string',
      port: 'number',
      protocol: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

