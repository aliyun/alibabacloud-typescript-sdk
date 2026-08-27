// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupsResponseBodyStackGroupsAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * - true: Automatic deployment is enabled. When a member account is added to the target folder, ROS deploys a stack instance for it. When a member account is removed, ROS deletes the stack instance.
   * 
   * - false: Automatic deployment is disabled. Stack instances remain unchanged when folder membership changes.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Whether stacks are retained when member accounts are removed from the folder.
   * 
   * Valid values:
   * 
   * - true: The stacks are retained.
   * 
   * - false: The stacks are deleted.
   * 
   * > Returned only when Enabled is true.
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBodyStackGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the stack group.
   * 
   * @example
   * usage1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack group.
   * 
   * @example
   * test1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBodyStackGroups extends $dara.Model {
  /**
   * @remarks
   * The automatic deployment settings.
   */
  autoDeployment?: ListStackGroupsResponseBodyStackGroupsAutoDeployment;
  /**
   * @remarks
   * The creation time of the stack group.
   * 
   * @example
   * 2024-01-05T05:38:31
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the stack group.
   * 
   * @example
   * My Stack Group
   */
  description?: string;
  /**
   * @remarks
   * The time of the last successful drift detection on the stack group.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The permission model.
   * 
   * Valid values:
   * 
   * - SELF_MANAGED: self-managed permissions.
   * 
   * - SERVICE_MANAGED: service-managed permissions.
   * 
   * > For details on permission models of stack groups, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * SELF_MANAGED
   */
  permissionModel?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxcj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The drift status of the stack group from the last successful drift detection.
   * 
   * Valid values:
   * 
   * - DRIFTED: The stack group has drifted from its template.
   * 
   * - NOT_CHECKED: No drift detection has been performed.
   * 
   * - IN_SYNC: The stack group matches its template.
   * 
   * @example
   * IN_SYNC
   */
  stackGroupDriftStatus?: string;
  /**
   * @remarks
   * The ID of the stack group.
   * 
   * @example
   * fd0ddef9-9540-4b42-a464-94f77835****
   */
  stackGroupId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The status of the stack group.
   * 
   * Valid values:
   * 
   * - ACTIVE
   * 
   * - DELETED
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags of the stack group.
   */
  tags?: ListStackGroupsResponseBodyStackGroupsTags[];
  /**
   * @remarks
   * The last update time of the stack group.
   * 
   * @example
   * 2024-02-15T16:40:25
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeployment: 'AutoDeployment',
      createTime: 'CreateTime',
      description: 'Description',
      driftDetectionTime: 'DriftDetectionTime',
      permissionModel: 'PermissionModel',
      resourceGroupId: 'ResourceGroupId',
      stackGroupDriftStatus: 'StackGroupDriftStatus',
      stackGroupId: 'StackGroupId',
      stackGroupName: 'StackGroupName',
      status: 'Status',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeployment: ListStackGroupsResponseBodyStackGroupsAutoDeployment,
      createTime: 'string',
      description: 'string',
      driftDetectionTime: 'string',
      permissionModel: 'string',
      resourceGroupId: 'string',
      stackGroupDriftStatus: 'string',
      stackGroupId: 'string',
      stackGroupName: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListStackGroupsResponseBodyStackGroupsTags },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.autoDeployment && typeof (this.autoDeployment as any).validate === 'function') {
      (this.autoDeployment as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackGroupsResponseBody extends $dara.Model {
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
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The stack groups.
   */
  stackGroups?: ListStackGroupsResponseBodyStackGroups[];
  /**
   * @remarks
   * The total number of stack groups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      stackGroups: 'StackGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      stackGroups: { 'type': 'array', 'itemType': ListStackGroupsResponseBodyStackGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.stackGroups)) {
      $dara.Model.validateArray(this.stackGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

