// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank extends $dara.Model {
  /**
   * @remarks
   * The number of errors of the node.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The ID of the node.
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
   * The Alibaba Cloud UID of the node owner.
   * 
   * @example
   * 952795279527
   */
  owner?: string;
  /**
   * @remarks
   * The type of the node task.
   * 
   * @example
   * 10
   */
  prgType?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
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
      prgType: 'PrgType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      prgType: 'number',
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

export class GetInstanceErrorRankResponseBodyInstanceErrorRank extends $dara.Model {
  /**
   * @remarks
   * The error ranking data of nodes in the last month.
   */
  errorRank?: GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank[];
  /**
   * @remarks
   * The timestamp when the error ranking was updated.
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
      errorRank: { 'type': 'array', 'itemType': GetInstanceErrorRankResponseBodyInstanceErrorRankErrorRank },
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

export class GetInstanceErrorRankResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error ranking data of nodes.
   */
  instanceErrorRank?: GetInstanceErrorRankResponseBodyInstanceErrorRank;
  /**
   * @remarks
   * The unique ID generated for each request.
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
      instanceErrorRank: GetInstanceErrorRankResponseBodyInstanceErrorRank,
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

