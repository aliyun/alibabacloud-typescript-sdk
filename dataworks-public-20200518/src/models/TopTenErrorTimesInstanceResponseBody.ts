// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank extends $dara.Model {
  /**
   * @remarks
   * The number of errors that occurred on the node.
   * 
   * @example
   * 5
   */
  count?: number;
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
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 9527
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      programType: 'ProgramType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      programType: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponseBodyInstanceErrorRank extends $dara.Model {
  /**
   * @remarks
   * The ranking data of nodes on which errors occurred within the last month.
   */
  errorRank?: TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank[];
  /**
   * @remarks
   * The timestamp at which the rankings were updated.
   * 
   * @example
   * 1600963200000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      errorRank: 'ErrorRank',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorRank: { 'type': 'array', 'itemType': TopTenErrorTimesInstanceResponseBodyInstanceErrorRankErrorRank },
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorRank)) {
      $dara.Model.validateArray(this.errorRank);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopTenErrorTimesInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ranking data of nodes on which errors occurred.
   */
  instanceErrorRank?: TopTenErrorTimesInstanceResponseBodyInstanceErrorRank;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 952795279527****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceErrorRank: 'InstanceErrorRank',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceErrorRank: TopTenErrorTimesInstanceResponseBodyInstanceErrorRank,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceErrorRank && typeof (this.instanceErrorRank as any).validate === 'function') {
      (this.instanceErrorRank as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

