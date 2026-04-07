// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMem0InfoResponseBodyDataInstanceConnAddrs extends $dara.Model {
  /**
   * @example
   * pxc-spsil01pww4hfz.polarx.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 3306
   */
  port?: number;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-t4n4hf9xey7ea3lp4bwwx
   */
  VPCId?: string;
  /**
   * @example
   * vsw-t4ny14pr37spmjsbv5dc2
   */
  vSwitchId?: string;
  /**
   * @example
   * pxc-spsil01pww4hfzjayd-cn-20251013180429
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMem0InfoResponseBodyDataInstance extends $dara.Model {
  /**
   * @example
   * mysql.x2.large.2c
   */
  classCode?: string;
  connAddrs?: DescribeMem0InfoResponseBodyDataInstanceConnAddrs[];
  /**
   * @example
   * 2026-02-17T02:00:20Z
   */
  createTime?: string;
  /**
   * @example
   * pxc-spsil01pww4hfz-mem
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * local_ssd
   */
  storageType?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-t4n4hf9xey7ea3lp4bwwx
   */
  VPCId?: string;
  /**
   * @example
   * vsw-t4ny14pr37spmjsbv5dc2
   */
  vSwitchId?: string;
  /**
   * @example
   * ap-southeast-1a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      connAddrs: 'ConnAddrs',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      nodeCount: 'NodeCount',
      regionId: 'RegionId',
      status: 'Status',
      storageType: 'StorageType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      connAddrs: { 'type': 'array', 'itemType': DescribeMem0InfoResponseBodyDataInstanceConnAddrs },
      createTime: 'string',
      instanceId: 'string',
      nodeCount: 'number',
      regionId: 'string',
      status: 'string',
      storageType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connAddrs)) {
      $dara.Model.validateArray(this.connAddrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMem0InfoResponseBodyData extends $dara.Model {
  instance?: DescribeMem0InfoResponseBodyDataInstance;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeMem0InfoResponseBodyDataInstance,
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMem0InfoResponseBody extends $dara.Model {
  data?: DescribeMem0InfoResponseBodyData;
  /**
   * @example
   * C457B28E-9CAB-4B77-B5C6-5D71B7870B6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeMem0InfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

