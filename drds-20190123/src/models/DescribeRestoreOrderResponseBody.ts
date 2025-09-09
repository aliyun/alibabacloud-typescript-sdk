// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone for which to query resources.
   * 
   * @example
   * cn-hangzhou-e
   */
  azoneId?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * 4C8G * 2
   */
  instSpec?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Classic **: Classic Network
   * *   **vpc**: VPC
   * 
   * @example
   * vpc
   */
  network?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * @example
   * vsw-*******************
   */
  VSwtichId?: string;
  /**
   * @remarks
   * The ID of the VPC network.
   * 
   * @example
   * vpc-*******************
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      instSpec: 'InstSpec',
      network: 'Network',
      regionId: 'RegionId',
      VSwtichId: 'VSwtichId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      instSpec: 'string',
      network: 'string',
      regionId: 'string',
      VSwtichId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList extends $dara.Model {
  drdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      drdsOrderDOList: 'DrdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOListDrdsOrderDOList },
    };
  }

  validate() {
    if(Array.isArray(this.drdsOrderDOList)) {
      $dara.Model.validateArray(this.drdsOrderDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-g
   */
  azoneId?: string;
  /**
   * @remarks
   * The capacity of disk.
   * 
   * @example
   * 10240
   */
  dbInstanceStorage?: string;
  /**
   * @remarks
   * The storage engine of PolarDB.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * polar.mysql.x4.large
   */
  instanceClass?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **Classic**: Classic Network
   * *   **vpc**: VPC
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The number of streams that were returned.
   * 
   * @example
   * 1
   */
  num?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 5.6
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      dbInstanceStorage: 'DbInstanceStorage',
      engine: 'Engine',
      instanceClass: 'InstanceClass',
      network: 'Network',
      num: 'Num',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      dbInstanceStorage: 'string',
      engine: 'string',
      instanceClass: 'string',
      network: 'string',
      num: 'number',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList extends $dara.Model {
  polarOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      polarOrderDOList: 'PolarOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polarOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOListPolarOrderDOList },
    };
  }

  validate() {
    if(Array.isArray(this.polarOrderDOList)) {
      $dara.Model.validateArray(this.polarOrderDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-g
   */
  azoneId?: string;
  /**
   * @remarks
   * The capacity of disk.
   * 
   * @example
   * 10240
   */
  dbInstanceStorage?: string;
  /**
   * @remarks
   * The storage engine of the instance.
   * 
   * @example
   * MYSQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * rds.mysql.s2.large
   */
  instanceClass?: string;
  /**
   * @remarks
   * The network type. Valid values: - **Classic **: Classic Network
   * - **vpc**: VPC
   * 
   * @example
   * VPC
   */
  network?: string;
  /**
   * @remarks
   * The number of streams that were returned.
   * 
   * @example
   * 1
   */
  num?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The version of the operating system.
   * 
   * @example
   * 5.6
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      dbInstanceStorage: 'DbInstanceStorage',
      engine: 'Engine',
      instanceClass: 'InstanceClass',
      network: 'Network',
      num: 'Num',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      dbInstanceStorage: 'string',
      engine: 'string',
      instanceClass: 'string',
      network: 'string',
      num: 'number',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList extends $dara.Model {
  rdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList[];
  static names(): { [key: string]: string } {
    return {
      rdsOrderDOList: 'RdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsOrderDOList: { 'type': 'array', 'itemType': DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOListRdsOrderDOList },
    };
  }

  validate() {
    if(Array.isArray(this.rdsOrderDOList)) {
      $dara.Model.validateArray(this.rdsOrderDOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBodyRestoreOrderDO extends $dara.Model {
  /**
   * @remarks
   * The information of the restored order.
   */
  drdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList;
  /**
   * @remarks
   * The ID of the restored apsaradb for PolarDB cluster.
   */
  polarOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList;
  /**
   * @remarks
   * The information of the restored RDS order.
   */
  rdsOrderDOList?: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList;
  static names(): { [key: string]: string } {
    return {
      drdsOrderDOList: 'DrdsOrderDOList',
      polarOrderDOList: 'PolarOrderDOList',
      rdsOrderDOList: 'RdsOrderDOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDODrdsOrderDOList,
      polarOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDOPolarOrderDOList,
      rdsOrderDOList: DescribeRestoreOrderResponseBodyRestoreOrderDORdsOrderDOList,
    };
  }

  validate() {
    if(this.drdsOrderDOList && typeof (this.drdsOrderDOList as any).validate === 'function') {
      (this.drdsOrderDOList as any).validate();
    }
    if(this.polarOrderDOList && typeof (this.polarOrderDOList as any).validate === 'function') {
      (this.polarOrderDOList as any).validate();
    }
    if(this.rdsOrderDOList && typeof (this.rdsOrderDOList as any).validate === 'function') {
      (this.rdsOrderDOList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreOrderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AD2DE5D-B86B-40B5-9678-487D37******
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data object.
   */
  restoreOrderDO?: DescribeRestoreOrderResponseBodyRestoreOrderDO;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreOrderDO: 'RestoreOrderDO',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreOrderDO: DescribeRestoreOrderResponseBodyRestoreOrderDO,
      success: 'boolean',
    };
  }

  validate() {
    if(this.restoreOrderDO && typeof (this.restoreOrderDO as any).validate === 'function') {
      (this.restoreOrderDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

