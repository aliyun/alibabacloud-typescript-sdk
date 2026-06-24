// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShardRecoveriesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The data recovery progress.
   * 
   * @example
   * 80%
   */
  bytesPercent?: string;
  /**
   * @remarks
   * The total amount of data to be recovered.
   * 
   * @example
   * 12086
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The file recovery progress.
   * 
   * @example
   * 80.0%
   */
  filesPercent?: string;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 79
   */
  filesTotal?: number;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * my-index-000001
   */
  index?: string;
  /**
   * @remarks
   * The IP address of the source node.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceHost?: string;
  /**
   * @remarks
   * The source node.
   * 
   * @example
   * 2Kni3dJ
   */
  sourceNode?: string;
  /**
   * @remarks
   * The stage of the data recovery process. Valid values:
   * 
   * - done: Recovery is complete.
   * 
   * - finalize: Cleanup operations are in progress.
   * 
   * - index: Reading index metadata and copying bytes from the source to the target.
   * 
   * - init: Recovery has not started.
   * 
   * - start: Recovery is starting.
   * 
   * - translog: Replaying the transaction log.
   * 
   * @example
   * done
   */
  stage?: string;
  /**
   * @remarks
   * The IP address of the target node.
   * 
   * @example
   * 192.168.XX.XX
   */
  targetHost?: string;
  /**
   * @remarks
   * The target node.
   * 
   * @example
   * YVVKLmW
   */
  targetNode?: string;
  /**
   * @remarks
   * The number of translog operations to be recovered.
   * 
   * @example
   * 12086
   */
  translogOps?: number;
  /**
   * @remarks
   * The progress of translog operation recovery.
   * 
   * @example
   * 80%
   */
  translogOpsPercent?: string;
  static names(): { [key: string]: string } {
    return {
      bytesPercent: 'bytesPercent',
      bytesTotal: 'bytesTotal',
      filesPercent: 'filesPercent',
      filesTotal: 'filesTotal',
      index: 'index',
      sourceHost: 'sourceHost',
      sourceNode: 'sourceNode',
      stage: 'stage',
      targetHost: 'targetHost',
      targetNode: 'targetNode',
      translogOps: 'translogOps',
      translogOpsPercent: 'translogOpsPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesPercent: 'string',
      bytesTotal: 'number',
      filesPercent: 'string',
      filesTotal: 'number',
      index: 'string',
      sourceHost: 'string',
      sourceNode: 'string',
      stage: 'string',
      targetHost: 'string',
      targetNode: 'string',
      translogOps: 'number',
      translogOpsPercent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShardRecoveriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC47D9
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListShardRecoveriesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListShardRecoveriesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

