// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbListSlbEntity extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SLB instance.
   * 
   * @example
   * 192.168.xxx.xx
   */
  address?: string;
  /**
   * @remarks
   * The type of the IP address of the SLB instance. Valid values:
   * 
   * *   Internet: Users can connect to the SLB instance over the Internet.
   * *   Intranet: Users can connect to the SLB instance over the internal network.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * Indicates whether the SLB instance has expired. Valid values:
   * 
   * *   true: The SLB instance has expired.
   * *   false: The SLB instance has not expired.
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The ID of the group to which the SLB instance belongs.
   * 
   * @example
   * 64189****
   */
  groupId?: number;
  /**
   * @remarks
   * The network type of the SLB instance. Valid values:
   * 
   * *   Classic network
   * *   VPC
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The unique ID of the SLB instance.
   * 
   * @example
   * lb-2zebf1fpbpkc7dnro****
   */
  slbId?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * a9315af59b4cd11e9a18c00163e1****
   */
  slbName?: string;
  /**
   * @remarks
   * The status of the SLB instance.
   * 
   * @example
   * active
   */
  slbStatus?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * ****@aliyun.com
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-m5e666n89m2bx8jar****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-mktkxkhah14****
   */
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
  /**
   * @remarks
   * The number of available CPUs.
   * 
   * @example
   * 1
   */
  availableCpu?: number;
  /**
   * @remarks
   * The size of the available memory.
   * 
   * @example
   * 200
   */
  availableMem?: number;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the ECU was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1557890594376
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether Docker is installed. Valid values:
   * 
   * *   true: Docker is installed.
   * *   false: Docker is not installed.
   * 
   * @example
   * true
   */
  dockerEnv?: boolean;
  /**
   * @remarks
   * The unique ID of the elastic compute unit (ECU). You can run the `dmidecode` command on the ECS instance to query the ECU ID.
   * 
   * @example
   * 0de2ebdb-9490-4fc4-be41***************
   */
  ecuId?: string;
  /**
   * @remarks
   * The time when the last heartbeat detection was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281040819
   */
  heartbeatTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-2zej4i2jdf*********
   */
  instanceId?: string;
  /**
   * @remarks
   * The private IP address of the ECU.
   * 
   * @example
   * 192.168.xxx.xx
   */
  ipAddr?: string;
  /**
   * @remarks
   * The total size of memory. Unit: MB.
   * 
   * @example
   * 200
   */
  mem?: number;
  /**
   * @remarks
   * The name of the ECU.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the ECU is online. Valid values:
   * 
   * *   true: The ECU is online.
   * *   false: The ECU is offline.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the ECU was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281040827
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user associated with the ECU.
   * 
   * @example
   * edas_****_test@aliyun-****.com
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2ze1ram356umxs598****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-beijing-b
   */
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
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 192.168.xx.xxx
   */
  cidrblock?: string;
  /**
   * @remarks
   * The description of the VPC.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The number of ECS instances that run in the VPC.
   * 
   * @example
   * 1
   */
  ecsNum?: number;
  /**
   * @remarks
   * Indicates whether the VPC has expired. Valid values:
   * 
   * *   true: The VPC has expired.
   * *   false: The VPC has not expired.
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the VPC.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * ****_common_****@aliyun.com
   */
  userId?: string;
  /**
   * @remarks
   * The unique ID of the VPC.
   * 
   * @example
   * vpc-bp13evu42t1er****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The description of the ECS instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The elastic compute unit (ECU) that corresponds to the ECS instance.
   */
  ecuEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityEcuEntity;
  /**
   * @remarks
   * The elastic IP address (EIP).
   * 
   * @example
   * 192.168.xxx.xx
   */
  eip?: string;
  /**
   * @remarks
   * Indicates whether the ECS instance has expired. Valid values:
   * 
   * *   true: The ECS instance has expired.
   * *   false: The ECS instance has not expired.
   * 
   * @example
   * true
   */
  expired?: boolean;
  /**
   * @remarks
   * The ID of the resource group in Enterprise Distributed Application Service (EDAS).
   * 
   * @example
   * 64189****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * iZm5e853hvvrodnvqus****
   */
  hostName?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.xx.xxx
   */
  innerIp?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-m5e853hvvrodnvqu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * betabjmixcoud_01
   */
  instanceName?: string;
  /**
   * @remarks
   * The total size of memory. Unit: MB.
   * 
   * @example
   * 1
   */
  mem?: number;
  /**
   * @remarks
   * The private IP address of the ECS instance.
   * 
   * @example
   * 192.168.xx.xxx
   */
  privateIp?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 192.168.xx.xxx
   */
  publicIp?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The serial number of the ECS instance.
   * 
   * @example
   * 98b480b8-458b-4ff3-84b9-cf7097c5****
   */
  serialNum?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-m5eajgzn6b8sg9mv****
   */
  sgId?: string;
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * *   Pending: The ECS instance is being created.
   * *   Running: The ECS instance is running.
   * *   Starting: The ECS instance is being started.
   * *   Stopping: The ECS instance is being stopped.
   * *   Stopped: The ECS instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user account.
   * 
   * @example
   * ****_common_****@aliyun.com
   */
  userId?: string;
  /**
   * @remarks
   * The VPCs.
   */
  vpcEntity?: ListResourceGroupResponseBodyResourceGroupListResGroupEntityEcsListEcsEntityVpcEntity;
  /**
   * @remarks
   * The unique ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp13evu4aayj2t1er****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-qingdao-h
   */
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
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * ****@aliyun.com
   */
  adminUserId?: string;
  /**
   * @remarks
   * The time when the resource group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1557890594376
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the resource group.
   * 
   * @example
   * QqLZDA3pBZ
   */
  description?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 8592
   */
  id?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * TIa2LGixyD
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the resource group belongs.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The Server Load Balancer (SLB) instances.
   */
  slbList?: ListResourceGroupResponseBodyResourceGroupListResGroupEntitySlbList;
  /**
   * @remarks
   * The time when the resource group was updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1573281040827
   */
  updateTime?: number;
  /**
   * @remarks
   * The Elastic Compute Service (ECS) instances.
   */
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
  /**
   * @remarks
   * For more information about how to define a resource group, see ResGroupEntity.
   */
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

