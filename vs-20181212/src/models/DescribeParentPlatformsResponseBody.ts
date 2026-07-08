// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformsResponseBodyPlatforms extends $dara.Model {
  /**
   * @remarks
   * Whether to enable automatically. Valid values:
   * - false (default)
   * - true
   * 
   * @example
   * false
   */
  autoStart?: boolean;
  /**
   * @remarks
   * Whether to enable local authentication. Valid values:
   * - true (default)
   * - false
   * 
   * @example
   * true
   */
  clientAuth?: boolean;
  /**
   * @remarks
   * Local GB ID.
   * 
   * @example
   * 31010*****317542006
   */
  clientGbId?: string;
  /**
   * @remarks
   * Local SIP service IP.
   * 
   * @example
   * 192.168.0.1
   */
  clientIp?: string;
  /**
   * @remarks
   * Local password.
   * 
   * @example
   * admin123
   */
  clientPassword?: string;
  /**
   * @remarks
   * Local SIP service port.
   * 
   * @example
   * 5160
   */
  clientPort?: number;
  /**
   * @remarks
   * Local username.
   * 
   * @example
   * user01
   */
  clientUsername?: string;
  /**
   * @remarks
   * Parent platform creation time.
   * 
   * @example
   * 2018-12-10T21:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Parent platform description.
   * 
   * @example
   * 国标级联平台描述
   */
  description?: string;
  /**
   * @remarks
   * Parent platform GB ID.
   * 
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  /**
   * @remarks
   * Parent platform ID.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Parent platform SIP service IP.
   * 
   * @example
   * 10.10.10.10
   */
  ip?: string;
  /**
   * @remarks
   * Parent platform name.
   * 
   * @example
   * 国标级联平台测试
   */
  name?: string;
  /**
   * @remarks
   * Parent platform SIP service port.
   * 
   * @example
   * 5060
   */
  port?: number;
  /**
   * @remarks
   * Parent platform protocol. Valid values:
   * - gb28181 (GB standard)
   * 
   * @example
   * gb28181
   */
  protocol?: string;
  /**
   * @remarks
   * Parent platform status. Valid values:
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

export class DescribeParentPlatformsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of parent platforms.
   */
  platforms?: DescribeParentPlatformsResponseBodyPlatforms[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of parent platforms.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      platforms: 'Platforms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      platforms: { 'type': 'array', 'itemType': DescribeParentPlatformsResponseBodyPlatforms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

