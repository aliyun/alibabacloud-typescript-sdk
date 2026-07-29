// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkAccessEndpointResponseBodyNetworkAccessEndpointBackupVpcEndpoint extends $dara.Model {
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

export class GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint extends $dara.Model {
  backupVpcEndpoint?: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpointBackupVpcEndpoint;
  /**
   * @remarks
   * The time when the network access endpoint was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The private egress IP address range of the dedicated network access endpoint. This parameter is returned only when NetworkEndpointType is set to private.
   * 
   * @example
   * 172.168.x.x
   */
  egressPrivateIpAddresses?: string[];
  /**
   * @remarks
   * The public egress IP address range of the shared network access endpoint. This parameter is returned only when NetworkEndpointType is set to shared.
   * 
   * @example
   * 203.0.XX.XX/27
   */
  egressPublicIpAddresses?: string[];
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
   * The name of the dedicated network access endpoint.
   * 
   * @example
   * Xx-business VPC access endpoint
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
   * The ID of the security group used by the dedicated network access endpoint.
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
   * The time when the dedicated network access endpoint was last updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * The list of vSwitches to which the dedicated network access endpoint is connected.
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the dedicated network access endpoint is connected.
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The region of the VPC to which the dedicated network access endpoint is connected.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupVpcEndpoint: 'BackupVpcEndpoint',
      createTime: 'CreateTime',
      egressPrivateIpAddresses: 'EgressPrivateIpAddresses',
      egressPublicIpAddresses: 'EgressPublicIpAddresses',
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
      backupVpcEndpoint: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpointBackupVpcEndpoint,
      createTime: 'number',
      egressPrivateIpAddresses: { 'type': 'array', 'itemType': 'string' },
      egressPublicIpAddresses: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.egressPrivateIpAddresses)) {
      $dara.Model.validateArray(this.egressPrivateIpAddresses);
    }
    if(Array.isArray(this.egressPublicIpAddresses)) {
      $dara.Model.validateArray(this.egressPublicIpAddresses);
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

export class GetNetworkAccessEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network access endpoint information.
   */
  networkAccessEndpoint?: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint;
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
      networkAccessEndpoint: 'NetworkAccessEndpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpoint: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint,
      requestId: 'string',
    };
  }

  validate() {
    if(this.networkAccessEndpoint && typeof (this.networkAccessEndpoint as any).validate === 'function') {
      (this.networkAccessEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

