// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackResourcesResponseBodyResourcesModuleInfo extends $dara.Model {
  /**
   * @remarks
   * The concatenated list of logical IDs of one or more modules that contain the resource. The modules are listed starting from the outermost module and are separated by `/`.
   * 
   * In the following example, the resource is created from a module moduleB that is nested in a parent module moduleA.
   * 
   * `moduleA/moduleB`.
   * 
   * @example
   * moduleA/moduleB
   */
  logicalIdHierarchy?: string;
  /**
   * @remarks
   * The concatenated list of module types of one or more modules that contain the resource. The module types are listed starting from the outermost module and are separated by `/`.
   * 
   * In the following example, the resource is created from a module of the `MODULE::ROS::Child::Example` type, which is nested in a parent module of the `MODULE::ROS::Parent::Example` type.
   * 
   * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`.
   * 
   * @example
   * MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example
   */
  typeHierarchy?: string;
  static names(): { [key: string]: string } {
    return {
      logicalIdHierarchy: 'LogicalIdHierarchy',
      typeHierarchy: 'TypeHierarchy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalIdHierarchy: 'string',
      typeHierarchy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC+0 and follows the ISO 8601 standard. The time is in the YYYY-MM-DDThh:mm:ss format without the Z suffix.
   * 
   * @example
   * 2019-08-01T06:01:23
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the resource drift was detected during the most recent successful drift detection on the stack.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The logical resource ID, which is the name defined in the template.
   * 
   * @example
   * dummy
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The information about the module from which the resource is created. This parameter is returned only if the resource is created from a module.
   */
  moduleInfo?: ListStackResourcesResponseBodyResourcesModuleInfo;
  /**
   * @remarks
   * The physical resource ID, which is the actual resource ID.
   * 
   * @example
   * d04af923-e6b7-4272-aeaa-47ec9777****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The drift status of the resource in the most recent successful drift detection on the stack. Valid values:
   * - DELETED: The resource differs from the expected template configuration because the resource is deleted.
   * - MODIFIED: The resource differs from the expected template configuration.
   * - NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the resource differs from the expected template configuration.
   * - IN_SYNC: The current configuration of the resource matches the expected template configuration.
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
   * The stack name. The name can be up to 255 characters in length and must start with a digit or a letter. It can contain digits, letters, hyphens (-), and underscores (_).
   * 
   * @example
   * test-describe-resource
   */
  stackName?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * - INIT_COMPLETE: The resource is pending creation.
   * 
   * - CREATE_COMPLETE: The resource is created.
   * - CREATE_FAILED: The resource failed to be created.
   * - CREATE_IN_PROGRESS: The resource is being created.
   * - UPDATE_IN_PROGRESS: The resource is being updated.
   * - UPDATE_FAILED: The resource failed to be updated.
   * - UPDATE_COMPLETE: The resource is updated.
   * - DELETE_IN_PROGRESS: The resource is being deleted.
   * - DELETE_FAILED: The resource failed to be deleted.
   * - DELETE_COMPLETE: The resource is deleted.
   * - CHECK_IN_PROGRESS: The resource is being checked.
   * - CHECK_FAILED: The resource failed to be checked.
   * - CHECK_COMPLETE: The resource is checked.
   * - IMPORT_IN_PROGRESS: The resource import is in progress.
   * - IMPORT_FAILED: The resource import failed.
   * - IMPORT_COMPLETE: The resource import is complete.
   * 
   * @example
   * UPDATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason for the resource status.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the resource was last updated. The time is displayed in UTC+0 and follows the ISO 8601 standard. The time is in the YYYY-MM-DDThh:mm:ss format without the Z suffix.
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

export class ListStackResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resource objects.
   */
  resources?: ListStackResourcesResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListStackResourcesResponseBodyResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

