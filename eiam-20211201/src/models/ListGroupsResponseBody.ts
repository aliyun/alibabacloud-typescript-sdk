// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * Group creation time in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * Group description.
   * 
   * @example
   * test group
   */
  description?: string;
  /**
   * @remarks
   * Group external ID, used for association with external systems. Defaults to the account group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * Group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * Group name.
   * 
   * @example
   * group_name
   */
  groupName?: string;
  /**
   * @remarks
   * Group source ID. If created by importing from other sources, this is the external source ID. Defaults to the instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupSourceId?: string;
  /**
   * @remarks
   * Group source type. Currently, only self-built is supported. Valid values:
   * - build_in: self-built.
   * 
   * @example
   * build_in
   */
  groupSourceType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Group last update time in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupSourceId: 'GroupSourceId',
      groupSourceType: 'GroupSourceType',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupSourceId: 'string',
      groupSourceType: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Account group list.
   */
  groups?: ListGroupsResponseBodyGroups[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of matched entries. The maximum number of entries returned in a single request is determined by pageSize.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

