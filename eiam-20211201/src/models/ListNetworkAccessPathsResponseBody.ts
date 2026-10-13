// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkAccessPathsResponseBodyNetworkAccessPaths extends $dara.Model {
  /**
   * @remarks
   * The time when the dedicated network access endpoint access path was created, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The role of the network access endpoint path.
   * 
   * @example
   * primary
   */
  crossRegionReplicationRole?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the dedicated network access endpoint.
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The ID of the dedicated network access endpoint access path.
   * 
   * @example
   * nap_examplexxx
   */
  networkAccessPathId?: string;
  /**
   * @remarks
   * The ID of the ENI used by the dedicated network access endpoint access path.
   * 
   * @example
   * eni-examplexxx
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The private endpoint of the ENI on the private network used by the dedicated network access endpoint access path.
   * 
   * @example
   * cn-hangzhou
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The status of the dedicated network access endpoint access path. Valid values:
   *  
   * - pending: Pending initialization.
   * - creating: Being created.
   * - running: Running.
   * - deleting: Being deleted.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the dedicated network access endpoint access path was last updated, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI of the dedicated network access endpoint access path belongs.
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1a2b3c4d5e6f7g8
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC region information.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossRegionReplicationRole: 'CrossRegionReplicationRole',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessPathId: 'NetworkAccessPathId',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossRegionReplicationRole: 'string',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessPathId: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of network access endpoint access paths.
   */
  networkAccessPaths?: ListNetworkAccessPathsResponseBodyNetworkAccessPaths[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessPaths: 'NetworkAccessPaths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessPaths: { 'type': 'array', 'itemType': ListNetworkAccessPathsResponseBodyNetworkAccessPaths },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkAccessPaths)) {
      $dara.Model.validateArray(this.networkAccessPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

