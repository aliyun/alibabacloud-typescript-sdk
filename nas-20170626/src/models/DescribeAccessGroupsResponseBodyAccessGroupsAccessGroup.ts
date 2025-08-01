// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The network type of the permission group. Valid value: **Vpc**.
   * 
   * @example
   * Vpc
   */
  accessGroupType?: string;
  /**
   * @remarks
   * The time when the permission group was created.
   * 
   * @example
   * 2020-01-05T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the permission group.
   * 
   * @example
   * This is a test access group.
   */
  description?: string;
  /**
   * @remarks
   * The type of the file system.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose File Storage NAS (NAS) file system
   * *   extreme: Extreme NAS file system
   * *   cpfs: Cloud Parallel File Storage (CPFS) file system
   * 
   * >  CPFS file systems are available only on the China site (aliyun.com).
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The number of mount targets to which the permission group is attached.
   * 
   * @example
   * 0
   */
  mountTargetCount?: number;
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
   * The total number of rules in the permission group.
   * 
   * @example
   * 0
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessGroupType: 'AccessGroupType',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemType: 'FileSystemType',
      mountTargetCount: 'MountTargetCount',
      regionId: 'RegionId',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessGroupType: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemType: 'string',
      mountTargetCount: 'number',
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

