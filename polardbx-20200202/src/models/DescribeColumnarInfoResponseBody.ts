// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnarInfoResponseBodyDataInstanceTopologyListPhysicalNodes extends $dara.Model {
  /**
   * @remarks
   * The zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-h
   */
  AZone?: string;
  /**
   * @remarks
   * The disk size, in MB.
   * 
   * @example
   * 204800
   */
  disk?: number;
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * polarx.n8.medium.col
   */
  nodeClass?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * ***
   */
  nodeId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * polarx-col-kernel-5.4.20-20250819_17555906
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      AZone: 'AZone',
      disk: 'Disk',
      nodeClass: 'NodeClass',
      nodeId: 'NodeId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AZone: 'string',
      disk: 'number',
      nodeClass: 'string',
      nodeId: 'string',
      status: 'string',
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

export class DescribeColumnarInfoResponseBodyDataInstanceTopologyList extends $dara.Model {
  /**
   * @remarks
   * The instance type description.
   * 
   * @example
   * ***
   */
  comment?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * pxc-***
   */
  instanceName?: string;
  /**
   * @remarks
   * The node array.
   */
  physicalNodes?: DescribeColumnarInfoResponseBodyDataInstanceTopologyListPhysicalNodes[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceName: 'InstanceName',
      physicalNodes: 'PhysicalNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceName: 'string',
      physicalNodes: { 'type': 'array', 'itemType': DescribeColumnarInfoResponseBodyDataInstanceTopologyListPhysicalNodes },
    };
  }

  validate() {
    if(Array.isArray(this.physicalNodes)) {
      $dara.Model.validateArray(this.physicalNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnarInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of days that binlogs are retained.
   * 
   * @example
   * 30
   */
  binlogPersistTime?: number;
  /**
   * @remarks
   * The binlog size.
   * 
   * This parameter is required.
   * 
   * @example
   * 524288000
   */
  binlogSize?: number;
  /**
   * @remarks
   * The checksum switch.
   * 
   * @example
   * ON
   */
  checkSumSwitch?: string;
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * polarx.n8.medium.col
   */
  classCode?: string;
  /**
   * @remarks
   * The new column store version.
   * 
   * This parameter is required.
   * 
   * @example
   * polarx-col-kernel-5.4.20-20250819_17555906
   */
  columnarNewVersion?: string;
  /**
   * @remarks
   * The column store version.
   * 
   * @example
   * polarx-col-kernel-5.4.20-20250819_17555906
   */
  columnarVersion?: string;
  /**
   * @remarks
   * The instance list.
   */
  instanceTopologyList?: DescribeColumnarInfoResponseBodyDataInstanceTopologyList[];
  /**
   * @remarks
   * server id
   * 
   * This parameter is required.
   * 
   * @example
   * 53755321
   */
  serverId?: number;
  static names(): { [key: string]: string } {
    return {
      binlogPersistTime: 'BinlogPersistTime',
      binlogSize: 'BinlogSize',
      checkSumSwitch: 'CheckSumSwitch',
      classCode: 'ClassCode',
      columnarNewVersion: 'ColumnarNewVersion',
      columnarVersion: 'ColumnarVersion',
      instanceTopologyList: 'InstanceTopologyList',
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binlogPersistTime: 'number',
      binlogSize: 'number',
      checkSumSwitch: 'string',
      classCode: 'string',
      columnarNewVersion: 'string',
      columnarVersion: 'string',
      instanceTopologyList: { 'type': 'array', 'itemType': DescribeColumnarInfoResponseBodyDataInstanceTopologyList },
      serverId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTopologyList)) {
      $dara.Model.validateArray(this.instanceTopologyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnarInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeColumnarInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 14036EBE-****-44DB-ACE9-AC6157D3A6FC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeColumnarInfoResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

