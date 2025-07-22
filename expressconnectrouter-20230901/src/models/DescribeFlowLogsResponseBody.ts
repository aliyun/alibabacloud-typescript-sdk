// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowLogsResponseBodyFlowLogsTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the instance. The tag key cannot be an empty string.
   * 
   * > It can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * > It can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`. The tag value can be an empty string.
   * 
   * @example
   * TagValue
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

export class DescribeFlowLogsResponseBodyFlowLogs extends $dara.Model {
  /**
   * @remarks
   * The time when the flow log was created. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2023-09-21T04:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the flow log.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * The ECR ID.
   * 
   * @example
   * ecr-h4cop1khw98*****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * @example
   * flowlog-leypqehtgtia2*****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The name of the flow log.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vbr-9dpty76irpf4u15*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * - **VBR**: virtual border router (VBR)
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
   * 600
   */
  interval?: number;
  /**
   * @remarks
   * The Logstore that stores the captured traffic data.
   * 
   * @example
   * FlowLogStore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the project that stores the captured traffic data.
   * 
   * @example
   * FlowLogProject
   */
  projectName?: string;
  /**
   * @remarks
   * The region ID of the flow log.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the ECR belongs.
   * 
   * @example
   * rg-aekzb3xwrexc4ry
   */
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
  /**
   * @remarks
   * The ID of the region where Log Service is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The status of the flow log. Valid values:
   * 
   * *   **Active**
   * 
   * *   **Inactive**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tag key.
   */
  tags?: DescribeFlowLogsResponseBodyFlowLogsTags[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      ecrId: 'EcrId',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      interval: 'Interval',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      samplingRate: 'SamplingRate',
      slsRegionId: 'SlsRegionId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      ecrId: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      interval: 'number',
      logStoreName: 'string',
      projectName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      samplingRate: 'string',
      slsRegionId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried information about the request denial.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed. For more information, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * IllegalParamFormat.EcrId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the `%s` variable in **ErrMessage**.
   * 
   * >  For example, if the value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * The param format of EcrId **** is illegal.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The information about the flow logs.
   */
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The total number of entries returned. Valid values: 1 to 2147483647. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FABF516-FED3-5697-BDA2-B18C5D9A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **True**
   * - **False**
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that meet the query conditions.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      flowLogs: 'FlowLogs',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      flowLogs: { 'type': 'array', 'itemType': DescribeFlowLogsResponseBodyFlowLogs },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flowLogs)) {
      $dara.Model.validateArray(this.flowLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

