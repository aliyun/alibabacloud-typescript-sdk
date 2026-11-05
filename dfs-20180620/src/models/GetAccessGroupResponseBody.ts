// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessGroupResponseBodyAccessGroup extends $dara.Model {
  /**
   * @remarks
   * The access group ID.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The name of the access group.
   * 
   * @example
   * test-cluster-policy
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The time when the access group was created. The time is displayed in UTC and follows the ISO 8601 standard. Example: 2022-04-18T08:02:09.986217Z.
   * 
   * @example
   * 2022-04-18T08:02:09.986217Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the access group.
   * 
   * @example
   * Dedicated access group for test clusters
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the access group is the default access group. Valid values:
   * 
   * - true: The access group is the default access group. When the access group is the default access group, all IP addresses are allowed to access it, and you cannot delete the default access group or the permission rules in the access group.
   * - false: The access group is not the default access group.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of mount points associated with the access group.
   * 
   * @example
   * 1
   */
  mountPointCount?: number;
  /**
   * @remarks
   * The network type of the access group.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of permission rules in the access group.
   * 
   * @example
   * 3
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      mountPointCount: 'MountPointCount',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      mountPointCount: 'number',
      networkType: 'string',
      regionId: 'string',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access group information.
   */
  accessGroup?: GetAccessGroupResponseBodyAccessGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: GetAccessGroupResponseBodyAccessGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessGroup && typeof (this.accessGroup as any).validate === 'function') {
      (this.accessGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

