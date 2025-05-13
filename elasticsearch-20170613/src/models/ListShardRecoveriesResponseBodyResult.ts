// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListShardRecoveriesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The data restoration progress.
   * 
   * @example
   * 80%
   */
  bytesPercent?: string;
  /**
   * @remarks
   * The total amount of data that is restored.
   * 
   * @example
   * 12086
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The file execution progress.
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
   * The name of the index.
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
   * The name of the source node.
   * 
   * @example
   * 2Kni3dJ
   */
  sourceNode?: string;
  /**
   * @remarks
   * The data restoration status. Valid values:
   * 
   * *   done: Data restoration is complete.
   * *   finalize: Data is being cleared.
   * *   index: Index metadata is being read, and bytes are being copied from source to destination.
   * *   init: Data restoration is not started.
   * *   start: Data restoration is started.
   * *   translog: Translogs are being redone.
   * 
   * @example
   * done
   */
  stage?: string;
  /**
   * @remarks
   * The IP address of the destination node.
   * 
   * @example
   * 192.168.XX.XX
   */
  targetHost?: string;
  /**
   * @remarks
   * The name of the destination node.
   * 
   * @example
   * YVVKLmW
   */
  targetNode?: string;
  /**
   * @remarks
   * The number of translog operations to be restored.
   * 
   * @example
   * 12086
   */
  translogOps?: number;
  /**
   * @remarks
   * The restoration progress of translog operations.
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

