// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkAccessPathsResponseBodyNetworkAccessPaths extends $dara.Model {
  /**
   * @remarks
   * The creation time of the dedicated network access endpoint path. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
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
   * The ID of the dedicated network access endpoint path.
   * 
   * @example
   * nap_examplexxx
   */
  networkAccessPathId?: string;
  /**
   * @remarks
   * The ID of the ENI used by the dedicated network access endpoint path.
   * 
   * @example
   * eni-examplexxx
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The private endpoint of the ENI used by the dedicated network access endpoint path.
   * 
   * @example
   * cn-hangzhou
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The status of the dedicated network access endpoint path. Valid values:
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
   * The last update time of the dedicated network access endpoint path. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI of the dedicated network access endpoint path belongs.
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchId?: string;
  vpcId?: string;
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
   * The list of network access endpoint paths.
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

