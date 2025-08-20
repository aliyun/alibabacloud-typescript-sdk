// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupsResponseBodyStackGroupsAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * *   true: Automatic deployment is enabled. If you add a member to the folder to which the stack group belongs after automatic deployment is enabled, Resource Orchestration Service (ROS) automatically adds the stack instances in the stack group to the specified region of the member. If you delete the member from the folder, ROS automatically deletes the stack instances in the stack group from the specified region of the member.
   * *   false: Automatic deployment is disabled. After you disable automatic deployment, the stack instances remain unchanged when you change the member in the folder.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the stacks within a member are retained when you delete the member from the folder.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * > This parameter is returned only if Enabled is set to true.
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
   * The key of the tag that is added to the stack group.
   * 
   * @example
   * usage1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the stack group.
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
   * The information about automatic deployment settings.
   */
  autoDeployment?: ListStackGroupsResponseBodyStackGroupsAutoDeployment;
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
   * The time when the most recent successful drift detection was performed on the stack group.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The permission model of the stack group.
   * 
   * Valid values:
   * 
   * *   SELF_MANAGED
   * *   SERVICE_MANAGED
   * 
   * > For more information about the permission models of stack groups, see [Overview](https://help.aliyun.com/document_detail/154578.html).
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
   * The drift state of the stack group on which the most recent successful drift detection was performed.
   * 
   * Valid values:
   * 
   * *   DRIFTED: The stack group has drifted.
   * *   NOT_CHECKED: No drift detection is performed on the stack group.
   * *   IN_SYNC: No drifts are detected on the stack group.
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
   * The state of the stack group.
   * 
   * Valid values:
   * 
   * *   ACTIVE
   * *   DELETED
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the stack group.
   */
  tags?: ListStackGroupsResponseBodyStackGroupsTags[];
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
   * The page number of the returned page.
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

