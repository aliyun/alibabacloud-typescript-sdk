// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackGroupsResponseBodyStackGroupsAutoDeployment } from "./ListStackGroupsResponseBodyStackGroupsAutoDeployment";
import { ListStackGroupsResponseBodyStackGroupsTags } from "./ListStackGroupsResponseBodyStackGroupsTags";


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

