// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowLogRequestTag extends $dara.Model {
  key?: string;
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * > The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the ECR.
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
   * 
   * > The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The VBR ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of network instance. Valid values:
   * 
   * *   **VBR**
   * 
   * This parameter is required.
   * 
   * @example
   * VBR
   */
  instanceType?: string;
  /**
   * @remarks
   * The time window for collecting log data. Unit: seconds. Valid values:
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
   * The Logstore that stores the captured traffic data.
   * 
   * *   If a Logstore is already created in the selected region, enter the name of the Logstore.
   * *   If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
   * *   The name must be unique in a project.
   * *   It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start and end with a lowercase letter or a digit.
   * *   The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flowlog-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The project that stores the captured traffic data.
   * 
   * *   If a project is already created in the selected region, enter the name of the project.
   * *   If no projects are created in the selected region, enter a name and the system automatically creates a project.
   * 
   * The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
   * 
   * *   The name must be globally unique.
   * *   The name can contain only lowercase letters,
   * *   digits, and hyphens (-).
   * *   The name must start and end with a lowercase letter or a digit.
   * *   The name must be 3 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * flowlog-project
   */
  projectName?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The sampling proportion. Valid values:
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
  tag?: CreateFlowLogRequestTag[];
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

