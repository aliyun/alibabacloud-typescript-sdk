// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllEntityResponseBodyEntityList extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 281801
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * abc
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 172.19.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 100.104.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 101.132.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The operating system of the server. Valid values:
   * 
   * *   **linux**
   * *   **windows**
   * 
   * @example
   * windows
   */
  os?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      os: 'Os',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      os: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of servers.
   */
  entityList?: DescribeAllEntityResponseBodyEntityList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityList: 'EntityList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityList: { 'type': 'array', 'itemType': DescribeAllEntityResponseBodyEntityList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityList)) {
      $dara.Model.validateArray(this.entityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

