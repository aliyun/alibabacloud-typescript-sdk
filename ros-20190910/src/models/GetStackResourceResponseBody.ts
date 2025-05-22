// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetStackResourceResponseBodyModuleInfo } from "./GetStackResourceResponseBodyModuleInfo";


export class GetStackResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * 2019-08-01T06:01:23
   */
  createTime?: string;
  /**
   * @remarks
   * The reason why the resource is in its current state.
   * 
   * @example
   * no description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 2020-02-27T07:47:47
   */
  driftDetectionTime?: string;
  /**
   * @remarks
   * The time when the resource was updated.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * WebServer
   */
  logicalResourceId?: string;
  /**
   * @remarks
   * The list of the resource properties.
   * 
   * @example
   * {"key": "value"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The information about the modules from which the resource is created. This parameter is returned only if the resource is created from modules.
   */
  moduleInfo?: GetStackResourceResponseBodyModuleInfo;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * d04af923-e6b7-4272-aeaa-47ec9777****
   */
  physicalResourceId?: string;
  /**
   * @remarks
   * The physical ID of the resource.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the resource in the last successful drift detection. Valid values:
   * 
   * *   DELETED: The actual configuration of the resource differs from its expected template configuration because the resource is deleted.
   * *   MODIFIED: The actual configuration of the resource differs from its expected template configuration.
   * *   NOT_CHECKED: ROS has not checked whether the actual configuration of the resource differs from its expected template configuration.
   * *   IN_SYNC: The actual configuration of the resource matches its expected template configuration.
   */
  resourceAttributes?: { [key: string]: any }[];
  /**
   * @remarks
   * The time when the last successful drift detection was performed on the stack.
   * 
   * @example
   * IN_SYNC
   */
  resourceDriftStatus?: string;
  /**
   * @remarks
   * The logical ID of the resource defined in the template.
   * 
   * @example
   * ALIYUN::ROS::WaitConditionHandle
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * efdf5c10-96a5-4fd7-ab89-68e7baa2****
   */
  stackId?: string;
  /**
   * @remarks
   * The name of the stack.
   * 
   * @example
   * test-describe-resource
   */
  stackName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CREATE_COMPLETE
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * state changed
   */
  statusReason?: string;
  /**
   * @remarks
   * The name of the stack.
   * 
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). The name must start with a digit or letter.
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

