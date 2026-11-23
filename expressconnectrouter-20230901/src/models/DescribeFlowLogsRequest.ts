// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with `acs:`, and cannot contain `http://` or `https://`.
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

export class DescribeFlowLogsRequest extends $dara.Model {
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
   * Specifies whether to only perform a dry run for this request. Valid values:
   * 
   * - **true**: send a check request and do not modify service resources.
   * 
   * - **false** (default): send a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-a5xqrgbeidz1w8****
   */
  ecrId?: string;
  /**
   * @remarks
   * The instance ID of the flow log instance.
   * 
   * @example
   * ecr-flog-jqnr0veifo5d****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The name of the flow log. The name must be 0 to 128 characters in length.
   * 
   * @example
   * same-flowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The instance ID of the VBR instance loaded on the Express Connect Router (ECR).
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  instanceId?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore used to capture traffic.
   * - If you have created a Logstore in the current region, you can enter the name of the existing Logstore.
   * - If you have not created a Logstore in the current region, you can specify a custom name for the Logstore, and the system automatically creates the Logstore. The naming rules are as follows:
   * 
   * - The Logstore name must be unique within the same project.
   * - It can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * - It must start and end with a lowercase letter or a digit.
   * - It must be 3 to 63 characters in length.
   * 
   * @example
   * myFlowlog
   */
  logStoreName?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If NextToken is empty, no next query is available.
   * - If NextToken has a return value, the value indicates the token for the next query.
   * 
   * @example
   * gAAAAABkWw*******
   */
  nextToken?: string;
  /**
   * @remarks
   * The Simple Log Service project used to capture traffic.
   * - If you have created a project in the current region, you can enter the name of the existing project.
   * - If you have not created a project in the current region, you can specify a custom name for the project, and the system automatically creates the project.
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
   * @example
   * myFlowlog
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
   * The tags.
   * 
   * You can add up to 20 tags.
   */
  tag?: DescribeFlowLogsRequestTag[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      instanceId: 'InstanceId',
      logStoreName: 'LogStoreName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      instanceId: 'string',
      logStoreName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectName: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeFlowLogsRequestTag },
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

