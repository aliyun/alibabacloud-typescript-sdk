// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSendFileResultsRequestTag } from "./DescribeSendFileResultsRequestTag";


export class DescribeSendFileResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance for which you want to query file sending records.
   * 
   * @example
   * i-hz0jdfwd9f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The overall sending status of the file. The overall sending status of the file varies based on the sending status of the file on all destination instances. Valid values:
   * 
   * *   Pending: The file is being verified or sent. If the sending state of the file on at least one instance is Pending, the overall sending state of the file is Pending.
   * *   Running: The file is being sent to the instances. If the sending state of the file on at least one instance is Running, the overall sending state of the file is Running.
   * *   Success: The file is sent. If the sending state of the file on all instances is Success, the overall sending state of the file is Success.
   * *   Failed: The file fails to be sent. If the sending state of the file on all instances is Failed, the overall sending state of the file is Failed.
   * *   PartialFailed: The file sending task succeeds on some instances and fails on other instances. If the sending state of the file is Success on some instances and is Failed on other instances, the overall sending state of the file is PartialFailed.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The ID of the file sending task.
   * 
   * @example
   * f-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the file whose sending records you want to query.
   * 
   * @example
   * test.txt
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * >  This parameter will be removed in the future. We recommend that you use NextToken and MaxResults for a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the ECS instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. After you set this parameter, file sending results in the specified resource group are queried.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the file sending task.
   */
  tag?: DescribeSendFileResultsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      maxResults: 'MaxResults',
      name: 'Name',
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
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeSendFileResultsRequestTag },
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

