// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationAttributeResponseBodyComponentsSecurityGroups extends $dara.Model {
  /**
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * sg-*******************
   */
  securityGroupId?: string;
  /**
   * @example
   * MyGroupName
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      netType: 'NetType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays extends $dara.Model {
  /**
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @example
   * mytag
   */
  securityIPArrayTag?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @example
   * mix
   */
  securityIPNetType?: string;
  /**
   * @example
   * ipv4
   */
  securityIPType?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPArrayTag: 'SecurityIPArrayTag',
      securityIPList: 'SecurityIPList',
      securityIPNetType: 'SecurityIPNetType',
      securityIPType: 'SecurityIPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPArrayName: 'string',
      securityIPArrayTag: 'string',
      securityIPList: 'string',
      securityIPNetType: 'string',
      securityIPType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyComponentsTopology extends $dara.Model {
  children?: string[];
  /**
   * @example
   * 0
   */
  layer?: string;
  parents?: string[];
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      layer: 'Layer',
      parents: 'Parents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'string' },
      layer: 'string',
      parents: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.parents)) {
      $dara.Model.validateArray(this.parents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyComponents extends $dara.Model {
  /**
   * @example
   * polar.app.g2.medium
   */
  componentClass?: string;
  /**
   * @example
   * 2C4GB
   */
  componentClassDescription?: string;
  /**
   * @example
   * pac-*******************
   */
  componentId?: string;
  /**
   * @example
   * 1
   */
  componentMaxReplica?: number;
  /**
   * @example
   * 1
   */
  componentReplica?: number;
  /**
   * @example
   * default
   */
  componentReplicaGroupName?: string;
  /**
   * @example
   * gateway
   */
  componentType?: string;
  securityGroups?: DescribeApplicationAttributeResponseBodyComponentsSecurityGroups[];
  securityIPArrays?: DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays[];
  /**
   * @example
   * Activated
   */
  status?: string;
  topology?: DescribeApplicationAttributeResponseBodyComponentsTopology;
  static names(): { [key: string]: string } {
    return {
      componentClass: 'ComponentClass',
      componentClassDescription: 'ComponentClassDescription',
      componentId: 'ComponentId',
      componentMaxReplica: 'ComponentMaxReplica',
      componentReplica: 'ComponentReplica',
      componentReplicaGroupName: 'ComponentReplicaGroupName',
      componentType: 'ComponentType',
      securityGroups: 'SecurityGroups',
      securityIPArrays: 'SecurityIPArrays',
      status: 'Status',
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentClass: 'string',
      componentClassDescription: 'string',
      componentId: 'string',
      componentMaxReplica: 'number',
      componentReplica: 'number',
      componentReplicaGroupName: 'string',
      componentType: 'string',
      securityGroups: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponentsSecurityGroups },
      securityIPArrays: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponentsSecurityIPArrays },
      status: 'string',
      topology: DescribeApplicationAttributeResponseBodyComponentsTopology,
    };
  }

  validate() {
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.securityIPArrays)) {
      $dara.Model.validateArray(this.securityIPArrays);
    }
    if(this.topology && typeof (this.topology as any).validate === 'function') {
      (this.topology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodyEndpoints extends $dara.Model {
  /**
   * @example
   * myendpoint
   */
  description?: string;
  /**
   * @example
   * pa-**************
   */
  endpointId?: string;
  /**
   * @example
   * 172.31.95.252
   */
  IP?: string;
  /**
   * @example
   * Private
   */
  netType?: string;
  /**
   * @example
   * 8080
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endpointId: 'EndpointId',
      IP: 'IP',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpointId: 'string',
      IP: 'string',
      netType: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodySecurityGroups extends $dara.Model {
  /**
   * @example
   * vpc
   */
  netType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * sg-**************
   */
  securityGroupId?: string;
  /**
   * @example
   * MyGroupName
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      netType: 'NetType',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netType: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBodySecurityIPArrays extends $dara.Model {
  /**
   * @example
   * default
   */
  securityIPArrayName?: string;
  /**
   * @example
   * mytag
   */
  securityIPArrayTag?: string;
  /**
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @example
   * mix
   */
  securityIPNetType?: string;
  /**
   * @example
   * ipv4
   */
  securityIPType?: string;
  static names(): { [key: string]: string } {
    return {
      securityIPArrayName: 'SecurityIPArrayName',
      securityIPArrayTag: 'SecurityIPArrayTag',
      securityIPList: 'SecurityIPList',
      securityIPNetType: 'SecurityIPNetType',
      securityIPType: 'SecurityIPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPArrayName: 'string',
      securityIPArrayTag: 'string',
      securityIPList: 'string',
      securityIPNetType: 'string',
      securityIPType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @example
   * x86
   */
  architecture?: string;
  components?: DescribeApplicationAttributeResponseBodyComponents[];
  /**
   * @example
   * 2025-03-25T09:37:10Z
   */
  creationTime?: string;
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * myapp
   */
  description?: string;
  endpoints?: DescribeApplicationAttributeResponseBodyEndpoints[];
  /**
   * @example
   * 2025-06-25T09:37:10Z
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * 19:00Z
   */
  maintainEndTime?: string;
  /**
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * pfs-**************
   */
  polarFSInstanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  securityGroups?: DescribeApplicationAttributeResponseBodySecurityGroups[];
  securityIPArrays?: DescribeApplicationAttributeResponseBodySecurityIPArrays[];
  serverlessType?: string;
  /**
   * @example
   * Activated
   */
  status?: string;
  /**
   * @example
   * false
   */
  upgradeAvailable?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * VSwitch ID
   * 
   * @example
   * vsw-*******************
   */
  vSwitchId?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @example
   * cn-beijing-l
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      architecture: 'Architecture',
      components: 'Components',
      creationTime: 'CreationTime',
      DBClusterId: 'DBClusterId',
      description: 'Description',
      endpoints: 'Endpoints',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      payType: 'PayType',
      polarFSInstanceId: 'PolarFSInstanceId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      securityIPArrays: 'SecurityIPArrays',
      serverlessType: 'ServerlessType',
      status: 'Status',
      upgradeAvailable: 'UpgradeAvailable',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      architecture: 'string',
      components: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyComponents },
      creationTime: 'string',
      DBClusterId: 'string',
      description: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodyEndpoints },
      expireTime: 'string',
      expired: 'boolean',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      payType: 'string',
      polarFSInstanceId: 'string',
      regionId: 'string',
      requestId: 'string',
      securityGroups: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodySecurityGroups },
      securityIPArrays: { 'type': 'array', 'itemType': DescribeApplicationAttributeResponseBodySecurityIPArrays },
      serverlessType: 'string',
      status: 'string',
      upgradeAvailable: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      version: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.securityGroups)) {
      $dara.Model.validateArray(this.securityGroups);
    }
    if(Array.isArray(this.securityIPArrays)) {
      $dara.Model.validateArray(this.securityIPArrays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

