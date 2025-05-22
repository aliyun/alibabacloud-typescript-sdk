// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo } from "./ListStackResourceDriftsResponseBodyResourceDriftsModuleInfo";
import { ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences } from "./ListStackResourceDriftsResponseBodyResourceDriftsPropertyDifferences";


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

