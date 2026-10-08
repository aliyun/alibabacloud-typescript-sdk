// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsNotInClusterResponseBodyEcsEntityListEcsEntity extends $dara.Model {
  cpu?: number;
  eip?: string;
  expired?: boolean;
  innerIp?: string;
  instanceId?: string;
  instanceName?: string;
  mem?: number;
  privateIp?: string;
  publicIp?: string;
  regionId?: string;
  status?: string;
  vpcId?: string;
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

