// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoginBaseConfigsResponseBodyBaseConfigsTargetList extends $dara.Model {
  /**
   * @remarks
   * The UUID of the server or the ID of the server group on which the rule takes effect.
   * 
   * @example
   * 0011ea53-738c-4bff-93be-ce6a1cc9****
   */
  target?: string;
  /**
   * @remarks
   * The selection mode for the assets on which the rule takes effect. Valid values:
   * 
   * - **uuid**: added by individual asset.
   * - **groupId**: added by server group.
   * - **global**: all assets are selected.
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
   * BeiJing
   */
  location?: string;
  /**
   * @remarks
   * The remark information displayed for the corresponding configuration.
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
   * The list of details about the servers on which the rule takes effect.
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
   * The number of servers on which the rule takes effect.
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
   * The list of logon configuration details.
   */
  baseConfigs?: DescribeLoginBaseConfigsResponseBodyBaseConfigs[];
  /**
   * @remarks
   * The current page number in the paging query result.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of logon configuration entries displayed on each page in the paging query result. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 2C2D4B3C-0524-17B1-93D2-DA50119F4E1E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of logon configuration entries returned.
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

