// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectStackResourceDriftResponseBodyPropertyDifferences } from "./DetectStackResourceDriftResponseBodyPropertyDifferences";


export class DetectStackResourceDriftResponseBody extends $dara.Model {
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
   * The time when the resource drift detection was initiated.
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
   * The logical ID of the resource that is defined in the template.
   * 
   * @example
   * ScalingRule
   */
  logicalResourceId?: string;
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
  propertyDifferences?: DetectStackResourceDriftResponseBodyPropertyDifferences[];
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
   * The drift status of the resource. Valid values:
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
   * The type of the resource.
   * 
   * @example
   * ALIYUN::ESS::ScalingRule
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the stack.
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
      physicalResourceId: 'PhysicalResourceId',
      propertyDifferences: 'PropertyDifferences',
      requestId: 'RequestId',
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
      physicalResourceId: 'string',
      propertyDifferences: { 'type': 'array', 'itemType': DetectStackResourceDriftResponseBodyPropertyDifferences },
      requestId: 'string',
      resourceDriftStatus: 'string',
      resourceType: 'string',
      stackId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyDifferences)) {
      $dara.Model.validateArray(this.propertyDifferences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

