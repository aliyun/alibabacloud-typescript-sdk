// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackResourcesResponseBodyResourcesModuleInfo } from "./ListStackResourcesResponseBodyResourcesModuleInfo";


export class ListStackResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2019-08-01T06:01:23
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the most recent successful drift detection was performed on the stack.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID is the resource name that is defined in the template.
   * 
   * @example
   * dummy
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The information about the modules from which the resource is created. This parameter is returned only if the resource is created from modules.
   */
  moduleInfo?: ListStackResourcesResponseBodyResourcesModuleInfo;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * d04af923-e6b7-4272-aeaa-47ec9777****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The drift state of the resource in the most recent successful drift detection. Valid values:
   * 
   * *   DELETED: The actual configuration of the resource differs from its expected template configuration because the resource is deleted.
   * *   MODIFIED: The actual configuration of the resource differs from its expected template configuration.
   * *   NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The actual configuration of the resource matches its expected template configuration.
   * 
   * @example
   * IN_SYNC
   */
  resourceDriftStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ROS::Stack
   */
  resourceType?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * @example
   * test-describe-resource
   */
  stackName?: string;
  /**
   * @remarks
   * The state of the resource. Valid values:
   * 
   * *   INIT_COMPLETE: The resource is pending to be created.
   * *   CREATE_COMPLETE: The resource is created.
   * *   CREATE_FAILED: The resource failed to be created.
   * *   CREATE_IN_PROGRESS: The resource is being created.
   * *   UPDATE_IN_PROGRESS: The resource is being updated.
   * *   UPDATE_FAILED: The resource failed to be updated.
   * *   UPDATE_COMPLETE: The resource is updated.
   * *   DELETE_IN_PROGRESS: The resource is being deleted.
   * *   DELETE_FAILED: The resource failed to be deleted.
   * *   DELETE_COMPLETE: The resource is deleted.
   * *   CHECK_IN_PROGRESS: The resource is being validated.
   * *   CHECK_FAILED: The resource failed to be validated.
   * *   CHECK_COMPLETE: The resource is validated.
   * *   IMPORT_IN_PROGRESS: The resource is being imported.
   * *   IMPORT_FAILED: The resource failed to be imported.
   * *   IMPORT_COMPLETE: The resource is imported.
   * 
   * @example
   * UPDATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource is in its current state.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the resource was updated. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2019-08-01T06:01:29
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      driftDetectionTime: 'DriftDetectionTime',
      logicalResourceId: 'LogicalResourceId',
      moduleInfo: 'ModuleInfo',
      physicalResourceId: 'PhysicalResourceId',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
      stackName: 'StackName',
      status: 'Status',
      statusReason: 'StatusReason',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      driftDetectionTime: 'string',
      logicalResourceId: 'string',
      moduleInfo: ListStackResourcesResponseBodyResourcesModuleInfo,
      physicalResourceId: 'string',
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
      stackName: 'string',
      status: 'string',
      statusReason: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.moduleInfo && typeof (this.moduleInfo as any).validate === 'function') {
      (this.moduleInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

