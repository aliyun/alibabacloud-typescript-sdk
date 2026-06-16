// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkAccessPathsResponseBodyNetworkAccessPaths extends $dara.Model {
  /**
   * @remarks
   * The time when the dedicated network endpoint access path was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
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
   * The ID of the dedicated network endpoint.
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The ID of the dedicated network endpoint access path.
   * 
   * @example
   * nap_examplexxx
   */
  networkAccessPathId?: string;
  /**
   * @remarks
   * The ID of the ENI that is used by the dedicated network endpoint access path.
   * 
   * @example
   * eni-examplexxx
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The private IP address of the ENI that is used by the dedicated network endpoint access path.
   * 
   * @example
   * cn-hangzhou
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The status of the dedicated network endpoint access path. Valid values:
   * 
   * - pending: The path is being initialized.
   * 
   * - creating: The path is being created.
   * 
   * - running: The path is running.
   * 
   * - deleting: The path is being deleted.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the dedicated network endpoint access path was last updated. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the vSwitch to which the ENI of the dedicated network endpoint access path belongs.
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessPathId: 'NetworkAccessPathId',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessPathId: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchId: 'string',
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
   * The list of network endpoint access paths.
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

