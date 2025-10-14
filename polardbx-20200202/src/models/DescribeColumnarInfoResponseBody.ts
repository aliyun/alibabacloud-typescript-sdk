// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnarInfoResponseBodyDataInstanceTopologyListPhysicalNodes extends $dara.Model {
  /**
   * @example
   * cn-hangzhou-h
   */
  AZone?: string;
  /**
   * @example
   * 204800
   */
  disk?: number;
  /**
   * @example
   * polarx.n8.medium.col
   */
  nodeClass?: string;
  /**
   * @example
   * ***
   */
  nodeId?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
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
   * @example
   * ***
   */
  comment?: string;
  /**
   * @example
   * pxc-***
   */
  instanceName?: string;
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
   * @example
   * 30
   */
  binlogPersistTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 524288000
   */
  binlogSize?: number;
  /**
   * @example
   * ON
   */
  checkSumSwitch?: string;
  /**
   * @example
   * polarx.n8.medium.col
   */
  classCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polarx-col-kernel-5.4.20-20250819_17555906
   */
  columnarNewVersion?: string;
  /**
   * @example
   * polarx-col-kernel-5.4.20-20250819_17555906
   */
  columnarVersion?: string;
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
  data?: DescribeColumnarInfoResponseBodyData;
  /**
   * @remarks
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

