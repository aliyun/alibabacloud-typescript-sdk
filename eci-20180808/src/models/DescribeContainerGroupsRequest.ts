// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsRequestTag } from "./DescribeContainerGroupsRequestTag";


export class DescribeContainerGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The compute category of the instance. Valid values:
   * 
   * *   economy
   * *   general
   * 
   * @example
   * economy
   */
  computeCategory?: string;
  /**
   * @remarks
   * The IDs of the elastic container instances in JSON format. You can specify up to 20 IDs.
   * 
   * @example
   * ["eci-bp17gw49eu09yiwm****", "eci-bp19aq49du01abcm****", "eci-2zegym1qhbmdfr1s****"]
   */
  containerGroupIds?: string;
  /**
   * @remarks
   * The name of the elastic container instance.
   * 
   * @example
   * test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The maximum number of resources to return. Default value: 20. Maximum value: 20.
   * 
   * >  The number of returned resources is less than or equal to the specified number.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. If this parameter is left empty, all results have been returned.
   * 
   * > You do not need to specify this parameter in the first request. Starting from the second request, you can obtain the token from the result returned by the previous request.
   * 
   * @example
   * d78f2dd8-5979-42fe-****-b16db43be5bc
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the security group to which the instance belongs.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the elastic container instance. Valid values:
   * 
   * *   Pending: The instance is being started.
   * *   Running: The instance is running.
   * *   Succeeded: The instance runs successfully.
   * *   Failed: The instance fails to run.
   * *   Scheduling: The instance is being created.
   * *   ScheduleFailed: The instance fails to be created.
   * *   Restarting: The instance is being restarted.
   * *   Updating: The instance is being updated.
   * *   Terminating: The instance is being terminated.
   * *   Expired: The instance expires.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tag of the instances.
   */
  tag?: DescribeContainerGroupsRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the elastic container instances are connected.
   * 
   * @example
   * vsw-bp1jrgfqqy54kg5hc****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Specify whether to return event information.
   * 
   * @example
   * true
   */
  withEvent?: boolean;
  /**
   * @remarks
   * The ID of the zone in which the elastic container instances are deployed. If you do not specify this parameter, the system selects a zone.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeCategory: 'ComputeCategory',
      containerGroupIds: 'ContainerGroupIds',
      containerGroupName: 'ContainerGroupName',
      limit: 'Limit',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      withEvent: 'WithEvent',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeCategory: 'string',
      containerGroupIds: 'string',
      containerGroupName: 'string',
      limit: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeContainerGroupsRequestTag },
      vSwitchId: 'string',
      withEvent: 'boolean',
      zoneId: 'string',
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

