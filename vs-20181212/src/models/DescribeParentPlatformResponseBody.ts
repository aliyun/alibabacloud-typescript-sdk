// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the parent platform automatically. Valid values:
   * - false (default)
   * - true
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
   * The local GB ID.
   * 
   * @example
   * 31010*****317542006
   */
  clientGbId?: string;
  /**
   * @remarks
   * The local SIP service IP address.
   * 
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
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
   * The local SIP service port.
   * 
   * @example
   * 5160
   */
  clientPort?: number;
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
   * The time when the parent platform was created.
   * 
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the parent platform.
   * 
   * @example
   * 级联平台描述
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
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The SIP service IP address of the parent platform.
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
   * 国标级联平台测试
   */
  name?: string;
  /**
   * @remarks
   * The SIP service port of the parent platform.
   * 
   * @example
   * 5060
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the parent platform. Valid values:
   * - gb28181 (GB standard)
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the parent platform. Valid values:
   * - on (online)
   * - off (offline)
   * - failed (failed)
   * 
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

