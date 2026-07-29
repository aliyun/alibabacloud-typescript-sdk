// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpointsBackupVpcEndpoint extends $dara.Model {
  backupEgressPrivateIpAddresses?: string[];
  backupEgressPublicIpAddresses?: string[];
  backupSecurityGroupId?: string;
  backupVSwitchIds?: string[];
  backupVpcId?: string;
  backupVpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEgressPrivateIpAddresses: 'BackupEgressPrivateIpAddresses',
      backupEgressPublicIpAddresses: 'BackupEgressPublicIpAddresses',
      backupSecurityGroupId: 'BackupSecurityGroupId',
      backupVSwitchIds: 'BackupVSwitchIds',
      backupVpcId: 'BackupVpcId',
      backupVpcRegionId: 'BackupVpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEgressPrivateIpAddresses: { 'type': 'array', 'itemType': 'string' },
      backupEgressPublicIpAddresses: { 'type': 'array', 'itemType': 'string' },
      backupSecurityGroupId: 'string',
      backupVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      backupVpcId: 'string',
      backupVpcRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backupEgressPrivateIpAddresses)) {
      $dara.Model.validateArray(this.backupEgressPrivateIpAddresses);
    }
    if(Array.isArray(this.backupEgressPublicIpAddresses)) {
      $dara.Model.validateArray(this.backupEgressPublicIpAddresses);
    }
    if(Array.isArray(this.backupVSwitchIds)) {
      $dara.Model.validateArray(this.backupVSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints extends $dara.Model {
  backupVpcEndpoint?: ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpointsBackupVpcEndpoint;
  /**
   * @remarks
   * The creation time of the network access endpoint. The value is a UNIX timestamp in milliseconds.
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
   * The network access endpoint ID.
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * The network access endpoint name.
   * 
   * @example
   * VPC access endpoint for xx service
   */
  networkAccessEndpointName?: string;
  /**
   * @remarks
   * The type of the network access endpoint. Valid values:
   * 
   * - shared: Shared network access endpoint.
   * - private: Dedicated network access endpoint.
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * The security group ID used by the dedicated network access endpoint.
   * 
   * @example
   * sg-examplexxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The status of the network access endpoint. Valid values:
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
   * The last update time of the network access endpoint. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * The list of vSwitches for the dedicated network access endpoint.
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID of the dedicated network access endpoint.
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The region of the VPC for the dedicated network access endpoint.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupVpcEndpoint: 'BackupVpcEndpoint',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupVpcEndpoint: ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpointsBackupVpcEndpoint,
      createTime: 'number',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessEndpointName: 'string',
      networkAccessEndpointType: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    if(this.backupVpcEndpoint && typeof (this.backupVpcEndpoint as any).validate === 'function') {
      (this.backupVpcEndpoint as any).validate();
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of network access endpoints.
   */
  networkAccessEndpoints?: ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints[];
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkAccessEndpoints: 'NetworkAccessEndpoints',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpoints: { 'type': 'array', 'itemType': ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkAccessEndpoints)) {
      $dara.Model.validateArray(this.networkAccessEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

