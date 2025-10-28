// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsNotInClusterResponseBodyEcsEntityListEcsEntity extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The elastic IP address (EIP) associated with the ECS instance.
   * 
   * @example
   * 139.30.xxx.xx
   */
  eip?: string;
  /**
   * @remarks
   * Indicates whether the ECS instance has expired. Valid values:
   * 
   * *   **true**: The ECS instance has expired.
   * *   **false**: The ECS instance has not expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The private IP address of the ECS instance.
   * 
   * @example
   * 192.168.20.113
   */
  innerIp?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2ze7s2v0b***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * worker-k8s-for-cs-c9dfa009a5e7c4faab2010b87cae4****
   */
  instanceName?: string;
  /**
   * @remarks
   * The size of memory. Unit: bytes.
   * 
   * @example
   * 4096
   */
  mem?: number;
  /**
   * @remarks
   * The private IP address of the ECS instance.
   * 
   * @example
   * 192.168.*.**
   */
  privateIp?: string;
  /**
   * @remarks
   * The public IP address of the ECS instance.
   * 
   * @example
   * 131.30.xxx.xx
   */
  publicIp?: string;
  /**
   * @remarks
   * The ID of the region where the ECS instance is located.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * *   **Pending**: The ECS instance is being created.
   * *   **Running**: The ECS instance is running.
   * *   **Starting**: The ECS instance is being started.
   * *   **Stopping**: The ECS instance is being stopped.
   * *   **Stopped**: The ECS instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2zef6ob8mrlzv8x3q****
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
      cpu: 'Cpu',
      eip: 'Eip',
      expired: 'Expired',
      innerIp: 'InnerIp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      mem: 'Mem',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      status: 'Status',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      eip: 'string',
      expired: 'boolean',
      innerIp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      mem: 'number',
      privateIp: 'string',
      publicIp: 'string',
      regionId: 'string',
      status: 'string',
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

export class ListEcsNotInClusterResponseBodyEcsEntityList extends $dara.Model {
  ecsEntity?: ListEcsNotInClusterResponseBodyEcsEntityListEcsEntity[];
  static names(): { [key: string]: string } {
    return {
      ecsEntity: 'EcsEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsEntity: { 'type': 'array', 'itemType': ListEcsNotInClusterResponseBodyEcsEntityListEcsEntity },
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

export class ListEcsNotInClusterResponseBody extends $dara.Model {
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
   * The information about ECS instances.
   */
  ecsEntityList?: ListEcsNotInClusterResponseBodyEcsEntityList;
  /**
   * @remarks
   * The message that is returned.
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ecsEntityList: 'EcsEntityList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ecsEntityList: ListEcsNotInClusterResponseBodyEcsEntityList,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.ecsEntityList && typeof (this.ecsEntityList as any).validate === 'function') {
      (this.ecsEntityList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

