// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo extends $dara.Model {
  /**
   * @remarks
   * The concatenated logical IDs of one or more modules that contain the resource. The modules are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from Module B nested within Parent Module A:
   * 
   * `moduleA/moduleB`
   * 
   * @example
   * moduleA/moduleB
   */
  logicalIdHierarchy?: string;
  /**
   * @remarks
   * The concatenated types of one or more modules that contain the resource. The module types are listed from the outermost layer and separated by forward slashes (`/`).
   * 
   * In the following example, the resource is created from a module of the `MODULE::ROS::Child::Example` type that is nested within a parent module of the `MODULE::ROS::Parent::Example` type:
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

export class ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences extends $dara.Model {
  /**
   * @remarks
   * The actual value of the resource property.
   * 
   * @example
   * test1
   */
  actualValue?: string;
  /**
   * @remarks
   * The drift type of the resource property. Valid values:
   * 
   * *   ADD: The value is added to a resource property whose data type is Array or List.
   * *   REMOVE: The property is deleted from the current resource configuration.
   * *   NOT_EQUAL: The current property value differs from the expected value that is defined in the stack template.
   * 
   * @example
   * NOT_EQUAL
   */
  differenceType?: string;
  /**
   * @remarks
   * The expected value of the resource property that is defined in the template.
   * 
   * @example
   * test2
   */
  expectedValue?: string;
  /**
   * @remarks
   * The path of the resource property.
   * 
   * @example
   * /ScalingRuleName
   */
  propertyPath?: string;
  static names(): { [key: string]: string } {
    return {
      actualValue: 'ActualValue',
      differenceType: 'DifferenceType',
      expectedValue: 'ExpectedValue',
      propertyPath: 'PropertyPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualValue: 'string',
      differenceType: 'string',
      expectedValue: 'string',
      propertyPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBodyResourceDrifts extends $dara.Model {
  /**
   * @remarks
   * The actual JSON-formatted resource properties.
   * 
   * @example
   * {"ScalingRuleName": "test1"}
   */
  actualProperties?: string;
  /**
   * @remarks
   * The time when the drift detection operation was performed on the resource.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The JSON-formatted resource properties that are defined in the template.
   * 
   * @example
   * {"ScalingRuleName": "test2"}
   */
  expectedProperties?: string;
  /**
   * @remarks
   * The logical ID of the resource. The logical ID indicates the name of the resource that is defined in the template.
   * 
   * @example
   * ScalingRule
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The information about the modules from which the resource was created. This parameter is returned only if the resource is created from modules.
   */
  moduleInfo?: ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * asr-2ze4zzc3kf9yz1kd****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The property drifts of the resource.
   */
  propertyDifferences?: ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences[];
  /**
   * @remarks
   * The drift state of the resource. Valid values:
   * 
   * *   DELETED: The actual configuration of the resource differs from its expected template configuration because the resource is deleted.
   * *   MODIFIED: The actual configuration of the resource differs from its expected template configuration.
   * *   NOT_CHECKED: Resource Orchestration Service (ROS) has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The actual configuration of the resource matches its expected template configuration.
   * 
   * @example
   * MODIFIED
   */
  resourceDriftStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ESS::ScalingRule
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
  static names(): { [key: string]: string } {
    return {
      actualProperties: 'ActualProperties',
      driftDetectionTime: 'DriftDetectionTime',
      expectedProperties: 'ExpectedProperties',
      logicalResourceId: 'LogicalResourceId',
      moduleInfo: 'ModuleInfo',
      physicalResourceId: 'PhysicalResourceId',
      propertyDifferences: 'PropertyDifferences',
      resourceDriftStatus: 'ResourceDriftStatus',
      resourceType: 'ResourceType',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualProperties: 'string',
      driftDetectionTime: 'string',
      expectedProperties: 'string',
      logicalResourceId: 'string',
      moduleInfo: ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo,
      physicalResourceId: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences },
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
    };
  }

  validate() {
    if(this.moduleInfo && typeof (this.moduleInfo as any).validate === 'function') {
      (this.moduleInfo as any).validate();
    }
    if(Array.isArray(this.propertyDifferences)) {
      $dara.Model.validateArray(this.propertyDifferences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStackResourceDriftsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource drifts.
   */
  resourceDrifts?: ListStackResourceDriftsResponseBodyResourceDrifts[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceDrifts: 'ResourceDrifts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceDrifts: { 'type': 'array', 'itemType': ListStackResourceDriftsResponseBodyResourceDrifts },
    };
  }

  validate() {
    if(Array.isArray(this.resourceDrifts)) {
      $dara.Model.validateArray(this.resourceDrifts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

