// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpWhitelistResponseBodyGroupsGroupIpList extends $dara.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ip)) {
      $dara.Model.validateArray(this.ip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroupsGroup extends $dara.Model {
  /**
   * @example
   * default
   */
  groupName?: string;
  ipList?: DescribeIpWhitelistResponseBodyGroupsGroupIpList;
  /**
   * @example
   * 4
   */
  ipVersion?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ipList: 'IpList',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ipList: DescribeIpWhitelistResponseBodyGroupsGroupIpList,
      ipVersion: 'number',
    };
  }

  validate() {
    if(this.ipList && typeof (this.ipList as any).validate === 'function') {
      (this.ipList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBodyGroups extends $dara.Model {
  group?: DescribeIpWhitelistResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': DescribeIpWhitelistResponseBodyGroupsGroup },
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpWhitelistResponseBody extends $dara.Model {
  groups?: DescribeIpWhitelistResponseBodyGroups;
  /**
   * @example
   * AFAA617B-3268-5883-982B-DB8EC8CC1F1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: DescribeIpWhitelistResponseBodyGroups,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groups && typeof (this.groups as any).validate === 'function') {
      (this.groups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

