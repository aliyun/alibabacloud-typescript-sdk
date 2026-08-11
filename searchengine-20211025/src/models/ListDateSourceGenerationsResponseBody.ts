// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDateSourceGenerationsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The offline deployment ID.
   * 
   * @example
   * 122
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The start time of the build index operation.
   * 
   * @example
   * 1626143673
   */
  createTime?: number;
  /**
   * @remarks
   * The storage path of the dump table index file.
   * 
   * @example
   * hdfs://opensearch/dump.json
   */
  dataDumpRoot?: string;
  /**
   * @remarks
   * The full index version.
   * 
   * @example
   * 1626143930
   */
  generation?: number;
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * - api (default): restores to HDFS.
   * - oss: exports to OSS.
   * - odps: exports to ODPS.
   * 
   * This parameter has a value only when the dump table is restored from an index. The value is empty for common tables.
   */
  outPutType?: string;
  /**
   * @remarks
   * Key: the index name. Value: the number of shards.
   */
  partition?: { [key: string]: number };
  /**
   * @remarks
   * The status.
   * 
   * @example
   * STOPPED
   */
  status?: string;
  /**
   * @remarks
   * The incremental timestamp.
   * 
   * @example
   * 1626143673
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      createTime: 'createTime',
      dataDumpRoot: 'dataDumpRoot',
      generation: 'generation',
      outPutType: 'outPutType',
      partition: 'partition',
      status: 'status',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'number',
      createTime: 'number',
      dataDumpRoot: 'string',
      generation: 'number',
      outPutType: 'string',
      partition: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.partition) {
      $dara.Model.validateMap(this.partition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDateSourceGenerationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListDateSourceGenerationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDateSourceGenerationsResponseBodyResult },
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

