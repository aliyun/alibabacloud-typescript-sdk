// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup extends $dara.Model {
  accessGroupName?: string;
  accessGroupType?: string;
  createTime?: string;
  description?: string;
  fileSystemType?: string;
  mountTargetCount?: number;
  regionId?: string;
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

export class DescribeAccessGroupsResponseBodyAccessGroups extends $dara.Model {
  accessGroup?: DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup[];
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: { 'type': 'array', 'itemType': DescribeAccessGroupsResponseBodyAccessGroupsAccessGroup },
    };
  }

  validate() {
    if(Array.isArray(this.accessGroup)) {
      $dara.Model.validateArray(this.accessGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessGroupsResponseBody extends $dara.Model {
  accessGroups?: DescribeAccessGroupsResponseBodyAccessGroups;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of permission groups returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2514F97E-FFF0-4A1F-BF04-729CEAC6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of permission groups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroups: 'AccessGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroups: DescribeAccessGroupsResponseBodyAccessGroups,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessGroups && typeof (this.accessGroups as any).validate === 'function') {
      (this.accessGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

