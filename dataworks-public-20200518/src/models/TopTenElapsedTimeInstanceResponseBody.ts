// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the instance.
   * 
   * @example
   * 1600963200000
   */
  businessDate?: number;
  /**
   * @remarks
   * The run time length of the instance. Unit: seconds.
   * 
   * @example
   * 1000
   */
  consumed?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 95279527
   */
  instanceId?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 9527
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 952795279527
   */
  owner?: string;
  /**
   * @remarks
   * The type of the node. Valid values: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), and 1221 (PyODPS 3)
   * 
   * @example
   * 10
   */
  programType?: number;
  static names(): { [key: string]: string } {
    return {
      businessDate: 'BusinessDate',
      consumed: 'Consumed',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      programType: 'ProgramType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessDate: 'number',
      consumed: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      programType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank extends $dara.Model {
  /**
   * @remarks
   * The ranking data of the running durations of the instances.
   */
  consumeTimeRank?: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank[];
  /**
   * @remarks
   * The timestamp at which the ranking of the running durations of the instances was updated.
   * 
   * @example
   * 1600963200000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTimeRank: 'ConsumeTimeRank',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimeRank: { 'type': 'array', 'itemType': TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRankConsumeTimeRank },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.consumeTimeRank)) {
      $dara.Model.validateArray(this.consumeTimeRank);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenElapsedTimeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ranking record of the running durations of the instances.
   */
  instanceConsumeTimeRank?: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6347364dadsfadf****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceConsumeTimeRank: 'InstanceConsumeTimeRank',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConsumeTimeRank: TopTenElapsedTimeInstanceResponseBodyInstanceConsumeTimeRank,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceConsumeTimeRank && typeof (this.instanceConsumeTimeRank as any).validate === 'function') {
      (this.instanceConsumeTimeRank as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

