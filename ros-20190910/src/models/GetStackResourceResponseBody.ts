// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackResourceResponseBodyModuleInfo extends $dara.Model {
  /**
   * @remarks
   * A concatenated list of the logical IDs of one or more modules that contain the resource. The modules are listed starting from the outermost module, separated by `/`.
   * 
   * In the following example, the resource was created from moduleB, which is nested in the parent module moduleA.
   * 
   * `moduleA/moduleB`
   * 
   * @example
   * moduleA/moduleB
   */
  logicalIdHierarchy?: string;
  /**
   * @remarks
   * A concatenated list of the types of one or more modules that contain the resource. The module types are listed starting from the outermost module, separated by `/`.
   * 
   * In the following example, the resource was created from a module of the `MODULE::ROS::Child::Example` type, which is nested in a parent module of the `MODULE::ROS::Parent::Example` type.
   * 
   * `MODULE::ROS::Parent::Example/MODULE::ROS::Child::Example`
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

export class GetStackResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC+0 and in the ISO 8601 standard format without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2019-08-01T06:01:23
   */
  createTime?: string;
  /**
   * @remarks
   * The resource description.
   * 
   * @example
   * no description
   */
  description?: string;
  /**
   * @remarks
   * The time when the resource was last successfully checked for drift detection of the stack.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The logical ID of the resource, which is the resource name defined in the template.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"key": "value"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The information about the module from which the resource was created. This parameter is returned only when the resource is created from a module.
   */
  moduleInfo?: GetStackResourceResponseBodyModuleInfo;
  /**
   * @remarks
   * The physical ID of the resource, which is the actual resource ID.
   * 
   * @example
   * d04af923-e6b7-4272-aeaa-47ec9777****
   */
  physicalResourceId?: string;
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
   * The resource attribute list.
   */
  resourceAttributes?: { [key: string]: any }[];
  /**
   * @remarks
   * The drift status of the resource in the most recent successful drift detection of the stack. Valid values:
   * - DELETED: The resource differs from its expected template configuration because the resource has been deleted.
   * - MODIFIED: The resource differs from its expected template configuration.
   * - NOT_CHECKED: ROS has not checked whether the resource differs from its expected template configuration.
   * - IN_SYNC: The current configuration of the resource matches its expected template configuration.
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
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * efdf5c10-96a5-4fd7-ab89-68e7baa2****
   */
  stackId?: string;
  /**
   * @remarks
   * The stack name.
   * The name can be up to 255 characters in length, and must start with a digit or letter. It can contain digits, letters, hyphens (-), and underscores (_).
   * 
   * @example
   * test-describe-resource
   */
  stackName?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * - CREATE_COMPLETE
   * - CREATE_FAILED
   * - CREATE_IN_PROGRESS
   * - UPDATE_IN_PROGRESS
   * - UPDATE_FAILED
   * - UPDATE_COMPLETE
   * - DELETE_IN_PROGRESS
   * - DELETE_FAILED
   * - CHECK_IN_PROGRESS
   * - CHECK_FAILED
   * - CHECK_COMPLETE
   * - IMPORT_IN_PROGRESS
   * - IMPORT_FAILED
   * - IMPORT_COMPLETE
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The reason why the resource is in the current state.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  /**
   * @remarks
   * The time when the resource was last updated. The time is displayed in UTC+0 and in the ISO 8601 standard format without the Z suffix. Format: YYYY-MM-DDThh:mm:ss.
   * 
   * @example
   * 2019-08-01T06:01:29
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      driftDetectionTime: 'DriftDetectionTime',
      logicalResourceId: 'LogicalResourceId',
      metadata: 'Metadata',
      moduleInfo: 'ModuleInfo',
      physicalResourceId: 'PhysicalResourceId',
      requestId: 'RequestId',
      resourceAttributes: 'ResourceAttributes',
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
      description: 'string',
      driftDetectionTime: 'string',
      logicalResourceId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleInfo: GetStackResourceResponseBodyModuleInfo,
      physicalResourceId: 'string',
      requestId: 'string',
      resourceAttributes: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
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
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.moduleInfo && typeof (this.moduleInfo as any).validate === 'function') {
      (this.moduleInfo as any).validate();
    }
    if(Array.isArray(this.resourceAttributes)) {
      $dara.Model.validateArray(this.resourceAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

