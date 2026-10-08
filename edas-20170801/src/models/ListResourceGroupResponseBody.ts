// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity extends $dara.Model {
  address?: string;
  addressType?: string;
  expired?: boolean;
  groupId?: number;
  networkType?: string;
  regionId?: string;
  slbId?: string;
  slbName?: string;
  slbStatus?: string;
  userId?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      expired: 'Expired',
      groupId: 'GroupId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      slbId: 'SlbId',
      slbName: 'SlbName',
      slbStatus: 'SlbStatus',
      userId: 'UserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      expired: 'boolean',
      groupId: 'number',
      networkType: 'string',
      regionId: 'string',
      slbId: 'string',
      slbName: 'string',
      slbStatus: 'string',
      userId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList extends $dara.Model {
  slbEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity[];
  static names(): { [key: string]: string } {
    return {
      slbEntity: 'SlbEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbEntity: { 'type': 'array', 'itemType': ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity },
    };
  }

  validate() {
    if(Array.isArray(this.slbEntity)) {
      $dara.Model.validateArray(this.slbEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity extends $dara.Model {
  availableCpu?: number;
  availableMem?: number;
  cpu?: number;
  createTime?: number;
  dockerEnv?: boolean;
  ecuId?: string;
  heartbeatTime?: number;
  instanceId?: string;
  ipAddr?: string;
  mem?: number;
  name?: string;
  online?: boolean;
  regionId?: string;
  updateTime?: number;
  userId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCpu: 'AvailableCpu',
      availableMem: 'AvailableMem',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      dockerEnv: 'DockerEnv',
      ecuId: 'EcuId',
      heartbeatTime: 'HeartbeatTime',
      instanceId: 'InstanceId',
      ipAddr: 'IpAddr',
      mem: 'Mem',
      name: 'Name',
      online: 'Online',
      regionId: 'RegionId',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCpu: 'number',
      availableMem: 'number',
      cpu: 'number',
      createTime: 'number',
      dockerEnv: 'boolean',
      ecuId: 'string',
      heartbeatTime: 'number',
      instanceId: 'string',
      ipAddr: 'string',
      mem: 'number',
      name: 'string',
      online: 'boolean',
      regionId: 'string',
      updateTime: 'number',
      userId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity extends $dara.Model {
  cidrblock?: string;
  description?: string;
  ecsNum?: number;
  expired?: boolean;
  regionId?: string;
  status?: string;
  userId?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrblock: 'Cidrblock',
      description: 'Description',
      ecsNum: 'EcsNum',
      expired: 'Expired',
      regionId: 'RegionId',
      status: 'Status',
      userId: 'UserId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrblock: 'string',
      description: 'string',
      ecsNum: 'number',
      expired: 'boolean',
      regionId: 'string',
      status: 'string',
      userId: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntity extends $dara.Model {
  cpu?: number;
  description?: string;
  ecuEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity;
  eip?: string;
  expired?: boolean;
  groupId?: string;
  hostName?: string;
  innerIp?: string;
  instanceId?: string;
  instanceName?: string;
  mem?: number;
  privateIp?: string;
  publicIp?: string;
  regionId?: string;
  serialNum?: string;
  sgId?: string;
  status?: string;
  userId?: string;
  vpcEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      description: 'Description',
      ecuEntity: 'EcuEntity',
      eip: 'Eip',
      expired: 'Expired',
      groupId: 'GroupId',
      hostName: 'HostName',
      innerIp: 'InnerIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      mem: 'Mem',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      serialNum: 'SerialNum',
      sgId: 'SgId',
      status: 'Status',
      userId: 'UserId',
      vpcEntity: 'VpcEntity',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      description: 'string',
      ecuEntity: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity,
      eip: 'string',
      expired: 'boolean',
      groupId: 'string',
      hostName: 'string',
      innerIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      mem: 'number',
      privateIp: 'string',
      publicIp: 'string',
      regionId: 'string',
      serialNum: 'string',
      sgId: 'string',
      status: 'string',
      userId: 'string',
      vpcEntity: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity,
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.ecuEntity && typeof (this.ecuEntity as any).validate === 'function') {
      (this.ecuEntity as any).validate();
    }
    if(this.vpcEntity && typeof (this.vpcEntity as any).validate === 'function') {
      (this.vpcEntity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList extends $dara.Model {
  ecsEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntity[];
  static names(): { [key: string]: string } {
    return {
      ecsEntity: 'EcsEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsEntity: { 'type': 'array', 'itemType': ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntity },
    };
  }

  validate() {
    if(Array.isArray(this.ecsEntity)) {
      $dara.Model.validateArray(this.ecsEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupListResGroupEntity extends $dara.Model {
  adminUserId?: string;
  createTime?: number;
  description?: string;
  id?: number;
  name?: string;
  regionId?: string;
  slbList?: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList;
  updateTime?: number;
  ecsList?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList;
  static names(): { [key: string]: string } {
    return {
      adminUserId: 'AdminUserId',
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      regionId: 'RegionId',
      slbList: 'SlbList',
      updateTime: 'UpdateTime',
      ecsList: 'ecsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserId: 'string',
      createTime: 'number',
      description: 'string',
      id: 'number',
      name: 'string',
      regionId: 'string',
      slbList: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList,
      updateTime: 'number',
      ecsList: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsList,
    };
  }

  validate() {
    if(this.slbList && typeof (this.slbList as any).validate === 'function') {
      (this.slbList as any).validate();
    }
    if(this.ecsList && typeof (this.ecsList as any).validate === 'function') {
      (this.ecsList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBodyResourceGroupList extends $dara.Model {
  resGroupEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntity[];
  static names(): { [key: string]: string } {
    return {
      resGroupEntity: 'ResGroupEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resGroupEntity: { 'type': 'array', 'itemType': ListResourceGroupResponseBodyResourceGroupListResGroupEntity },
    };
  }

  validate() {
    if(Array.isArray(this.resGroupEntity)) {
      $dara.Model.validateArray(this.resGroupEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b197-40ab-9155-****
   */
  requestId?: string;
  resourceGroupList?: ListResourceGroupResponseBodyResourceGroupList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resourceGroupList: 'ResourceGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      resourceGroupList: ListResourceGroupResponseBodyResourceGroupList,
    };
  }

  validate() {
    if(this.resourceGroupList && typeof (this.resourceGroupList as any).validate === 'function') {
      (this.resourceGroupList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

