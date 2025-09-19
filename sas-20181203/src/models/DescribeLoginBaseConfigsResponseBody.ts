// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoginBaseConfigsResponseBodyBaseConfigsTargetList extends $dara.Model {
  /**
   * @remarks
   * The UUID or group ID of the server.
   * 
   * @example
   * 0011ea53-738c-4bff-93be-ce6a1cc9****
   */
  target?: string;
  /**
   * @remarks
   * The type of the server to which the configuration is applied. Valid values:
   * 
   * *   **uuid**: a server
   * *   **groupId**: a server group
   * *   **global**: all servers
   * 
   * @example
   * uuid
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginBaseConfigsResponseBodyBaseConfigs extends $dara.Model {
  /**
   * @remarks
   * The common logon account.
   * 
   * @example
   * 1582318****
   */
  account?: string;
  /**
   * @remarks
   * The end time of the common logon time range.
   * 
   * @example
   * 07:00
   */
  endTime?: string;
  /**
   * @remarks
   * The common logon IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The common logon location.
   * 
   * @example
   * Montenegro
   */
  location?: string;
  /**
   * @remarks
   * Corresponding configuration remark information.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The start time of the common logon time range.
   * 
   * @example
   * 08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The details of the servers to which the configuration is applied.
   */
  targetList?: DescribeLoginBaseConfigsResponseBodyBaseConfigsTargetList[];
  /**
   * @remarks
   * The total number of servers.
   * 
   * @example
   * 172
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of servers to which the configuration is applied.
   * 
   * @example
   * 13
   */
  uuidCount?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      endTime: 'EndTime',
      ip: 'Ip',
      location: 'Location',
      remark: 'Remark',
      startTime: 'StartTime',
      targetList: 'TargetList',
      totalCount: 'TotalCount',
      uuidCount: 'UuidCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      endTime: 'string',
      ip: 'string',
      location: 'string',
      remark: 'string',
      startTime: 'string',
      targetList: { 'type': 'array', 'itemType': DescribeLoginBaseConfigsResponseBodyBaseConfigsTargetList },
      totalCount: 'number',
      uuidCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginBaseConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration.
   */
  baseConfigs?: DescribeLoginBaseConfigsResponseBodyBaseConfigs[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2C2D4B3C-0524-17B1-93D2-DA50119F4E1E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      baseConfigs: 'BaseConfigs',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseConfigs: { 'type': 'array', 'itemType': DescribeLoginBaseConfigsResponseBodyBaseConfigs },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baseConfigs)) {
      $dara.Model.validateArray(this.baseConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

