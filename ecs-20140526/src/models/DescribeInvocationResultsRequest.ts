// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The ID of the command task. You can call the [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) operation to query the IDs of all command tasks.
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

export class DescribeInvocationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * $.parameters[11].schema.example
   * 
   * @example
   * c-hz0jdfwcsr****
   */
  commandId?: string;
  /**
   * @remarks
   * <DescribeInvocationResultsResponse>
   *     <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE*****</RequestId>
   *     <Invocation>
   *         <InvocationResults>
   *             <InvocationResult>
   *                 <Dropped>0</Dropped>
   *                 <InvocationStatus>Success</InvocationStatus>
   *                 <InstanceId>i-bp1i7gg30r52z2em****</InstanceId>
   *                 <ExitCode>0</ExitCode>
   *                 <ErrorInfo>the specified instance does not exists</ErrorInfo>
   *                 <StartTime>2019-12-20T06:15:55Z</StartTime>
   *                 <Repeats>0</Repeats>
   *                 <InvokeRecordStatus>Running</InvokeRecordStatus>
   *                 <FinishedTime>2019-12-20T06:15:56Z</FinishedTime>
   *                 <Output>MTU6MzA6MDEK</Output>
   *                 <CommandId>c-hz0jdfwcsr****</CommandId>
   *                 <ErrorCode>InstanceNotExists</ErrorCode>
   *                 <InvokeId>t-hz0jdfwd9f****</InvokeId>
   *                 <StopTime>2020-01-19T09:15:47Z</StopTime>
   *                 <ContainerId>ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****</ContainerId>
   *                 <ContainerName>test-container</ContainerName>
   *                 <Tags>
   *                     <TagKey>owner</TagKey>
   *                     <TagValue>zhangsan</TagValue>
   *                 </Tags>
   *             </InvocationResult>
   *         </InvocationResults>
   *         <TotalCount>1</TotalCount>
   *         <PageSize>1</PageSize>
   *         <PageNumber>1</PageNumber>
   *     </Invocation>
   * </DescribeInvocationResultsResponse>
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * {
   *   "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****",
   *   "Invocation" : {
   *     "InvocationResults" : {
   *       "InvocationResult" : [ {
   *         "Dropped" : 0,
   *         "InvocationStatus" : "Success",
   *         "InstanceId" : "i-bp1i7gg30r52z2em****",
   *         "ExitCode" : 0,
   *         "ErrorInfo" : "the specified instance does not exists",
   *         "StartTime" : "2019-12-20T06:15:55Z",
   *         "Repeats" : 0,
   *         "InvokeRecordStatus" : "Running",
   *         "FinishedTime" : "2019-12-20T06:15:56Z",
   *         "Output" : "MTU6MzA6MDEK",
   *         "CommandId" : "c-hz0jdfwcsr****",
   *         "ErrorCode" : "InstanceNotExists",
   *         "InvokeId" : "t-hz0jdfwd9f****",
   *         "StopTime" : "2020-01-19T09:15:47Z",
   *         "ContainerId":"ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****",
   *         "ContainerName":"test-container",      
   *         "Tags": [
   *                     {
   *                         "TagKey": "owner",
   *                         "TagValue": "zhangsan"
   *                     }
   *                 ]
   *       } ]
   *     },
   *     "TotalCount" : 1,
   *     "PageSize" : 1,
   *     "PageNumber" : 1
   *   }
   * }
   * 
   * @example
   * false
   */
  includeHistory?: boolean;
  /**
   * @remarks
   * $.parameters[11].schema.description
   * 
   * @example
   * i-bp1i7gg30r52z2em****
   */
  instanceId?: string;
  /**
   * @remarks
   * $.parameters[11].schema.items.enumValueTitles
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * $.parameters[11].schema.enumValueTitles
   * 
   * @example
   * Running
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * FEATUREecsXZ3H4M
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * dubbo
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * acs:ecs:{#regionId}:{#accountId}:command/*
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * acs:ecs:{#regionId}:{#accountId}:instance/*
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * $.parameters[11].schema.items.description
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * $.parameters[11].schema.items.example
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the command. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   */
  tag?: DescribeInvocationResultsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      contentEncoding: 'ContentEncoding',
      includeHistory: 'IncludeHistory',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      contentEncoding: 'string',
      includeHistory: 'boolean',
      instanceId: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeInvocationResultsRequestTag },
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

