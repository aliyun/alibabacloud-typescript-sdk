// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsRequestTag extends $dara.Model {
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

export class DescribeFlowLogsRequest extends $dara.Model {
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
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ECR ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-a5xqrgbeidz1w8****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * @example
   * flowlog-jqnr0veifo5d****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The flow log name. The name must be 0 to 128 characters in length.
   * 
   * @example
   * same-flowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The ID of the VBR associated with the ECR.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  instanceId?: string;
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
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * - You do not need to specify this parameter for the first request.
   * - You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * gAAAAABkWw*******
   */
  nextToken?: string;
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
   * @example
   * myFlowlog
   */
  projectName?: string;
  resourceGroupId?: string;
  tag?: DescribeFlowLogsRequestTag[];
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

