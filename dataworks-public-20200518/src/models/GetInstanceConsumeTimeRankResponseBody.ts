// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank extends $dara.Model {
  /**
   * @remarks
   * The data timestamp of the instance.
   * 
   * @example
   * 1600963200000
   */
  bizdate?: number;
  /**
   * @remarks
   * The running duration of the instance. Unit: seconds.
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
   * The type of the node.
   * 
   * @example
   * 10
   */
  prgType?: number;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      consumed: 'Consumed',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      prgType: 'PrgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      consumed: 'number',
      instanceId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      prgType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank extends $dara.Model {
  /**
   * @remarks
   * The ranking data of the running durations of instances.
   */
  consumeTimeRank?: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank[];
  /**
   * @remarks
   * The timestamp when the ranking was updated.
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
      consumeTimeRank: { 'type': 'array', 'itemType': GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRankConsumeTimeRank },
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

export class GetInstanceConsumeTimeRankResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ranking record of the running durations of instances.
   */
  instanceConsumeTimeRank?: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank;
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
      instanceConsumeTimeRank: GetInstanceConsumeTimeRankResponseBodyInstanceConsumeTimeRank,
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

