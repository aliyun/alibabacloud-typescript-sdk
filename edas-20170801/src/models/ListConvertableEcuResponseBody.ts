// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConvertableEcuResponseBodyInstanceListInstance extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the ECS instance.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The ID of the elastic compute units (ECU).
   * 
   * @example
   * b197-40ab-9155-7ca7
   */
  ecuId?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) associated with the ECS instance. The EIP can be changed.
   * 
   * @example
   * 13.xx.xxx.xx
   */
  eip?: string;
  /**
   * @remarks
   * Indicates whether the ECS instance has expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The private IP address of the ECS instance. This parameter is valid only when the ECS instance is deployed in a VPC.
   * 
   * @example
   * 192.168.13.xx
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
   * worker-k8s
   */
  instanceName?: string;
  /**
   * @remarks
   * The size of memory for the ECS instance.
   * 
   * @example
   * 4096
   */
  mem?: number;
  /**
   * @remarks
   * The private IP address of the ECS instance. This parameter is valid only when the ECS instance is deployed in a VPC.
   * 
   * @example
   * 192.XX.XX.123
   */
  privateIp?: string;
  /**
   * @remarks
   * The public IP address of the ECS instance. This IP address can be used only by the ECS instance.
   * 
   * @example
   * 13.xx.xx.xxx
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
   * The state of the instance. Valid values:
   * 
   * *   Pending: The instance is being created.
   * *   Running: The instance is running.
   * *   Starting: The instance is being started.
   * *   Stopping: The instance is being stopped.
   * *   Stopped: The instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2zef6ob8m************
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * jianwei-test
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      ecuId: 'EcuId',
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
      ecuId: 'string',
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

export class ListConvertableEcuResponseBodyInstanceList extends $dara.Model {
  instance?: ListConvertableEcuResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListConvertableEcuResponseBodyInstanceListInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConvertableEcuResponseBody extends $dara.Model {
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
   * The ECS instances that can be imported to the cluster.
   */
  instanceList?: ListConvertableEcuResponseBodyInstanceList;
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
   * b197-40ab-9155-7ca7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceList: 'InstanceList',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceList: ListConvertableEcuResponseBodyInstanceList,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceList && typeof (this.instanceList as any).validate === 'function') {
      (this.instanceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

