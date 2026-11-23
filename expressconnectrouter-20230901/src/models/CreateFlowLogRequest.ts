// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowLogRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. If you specify this parameter, it cannot be an empty string. It can be up to 128 characters in length, and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. It can be up to 128 characters in length, and cannot start with acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestValue
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

export class CreateFlowLogRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a parameter value on your client to ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the flow log.
   * > The description can be empty or 0 to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the request is only a dry run. Valid values:
   * 
   * - **true**: Performs a dry run without modifying EPS resources.
   * 
   * - **false** (default): Sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The name of the flow log.
   * > The name can be empty or 0 to 128 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The instance ID of the VBR.
   * 
   * >The VBR instance must be created by calling the CreateVirtualBorderRouter operation of the Vpc/2016-04-28 API version. The prerequisite is that a physical connection exists.
   * >The VBR instance must be mounted as a child instance to the Express Connect Router (ECR) corresponding to EcrId by calling AttachExpressConnectRouterChildInstance, and the mount status must be ACTIVE before you can create a flow log. You can call DescribeExpressConnectRouterChildInstance to query the mount status of the child instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * - **VBR**: virtual border router (VBR) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * VBR
   */
  instanceType?: string;
  /**
   * @remarks
   * The duration of the capture window for traffic captured by the flow log. Unit: seconds. Valid values:
   * 
   * - **60** 
   * - **600**
   * 
   * Default value: **600**.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The name of the Logstore used to store catch traffic.
   * - If you have already created a Logstore in the current region, you can enter the name of the existing Logstore.
   * - If you have not created a Logstore in the current region, you can specify a custom name for the Logstore, and the system will automatically create the Logstore. The naming rules for the Logstore name are as follows:
   * 
   * - The Logstore name must be unique within the same project.
   * - It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * - It must start and end with a lowercase letter or a digit.
   * - It must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flowlog-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project used to store catch traffic.
   * - If you have already created a project in the current region, you can enter the name of the existing project.
   * - If you have not created a project in the current region, you can specify a custom name for the project, and the system will automatically create the project.
   * 
   * 
   * The project name must be globally unique within an Alibaba Cloud region and cannot be modified after creation. The naming rules are as follows:
   *    
   * - The project name must be globally unique.
   * - It can contain only lowercase
   * - letters, digits, and hyphens (-).
   * - It must start and end with a lowercase letter or a digit.
   * - It must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flowlog-project
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the flow log instance belongs.
   * 
   * @example
   * rg-aek2aq7f4va****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sampling ratio. Valid values:
   * 
   * - **1:4096**
   * - **1:2048**
   * - **1:1024**
   * 
   * Default value: **1:4096**.
   * 
   * @example
   * 1:4096
   */
  samplingRate?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can add up to 20 tags.
   */
  tag?: CreateFlowLogRequestTag[];
  /**
   * @remarks
   * The region where the project to which logs are delivered resides. You only need to specify this parameter for cross-region log delivery. You do not need to specify this parameter for same-region log delivery.
   * 
   * @example
   * cn-hangzhou
   */
  targetSlsRegionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      flowLogName: 'FlowLogName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      interval: 'Interval',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      resourceGroupId: 'ResourceGroupId',
      samplingRate: 'SamplingRate',
      tag: 'Tag',
      targetSlsRegionId: 'TargetSlsRegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      flowLogName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      interval: 'number',
      logStoreName: 'string',
      projectName: 'string',
      resourceGroupId: 'string',
      samplingRate: 'string',
      tag: { 'type': 'array', 'itemType': CreateFlowLogRequestTag },
      targetSlsRegionId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

