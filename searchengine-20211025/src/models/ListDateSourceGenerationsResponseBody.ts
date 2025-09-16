// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDateSourceGenerationsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * 122
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The timestamp that was generated when the index building was started.
   * 
   * @example
   * 1626143673
   */
  createTime?: number;
  /**
   * @remarks
   * The path of the dumped index in the Apsara File Storage for HDFS file system.
   * 
   * @example
   * ""
   */
  dataDumpRoot?: string;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1626143930
   */
  generation?: number;
  /**
   * @remarks
   * The shards of the index version. The value is a key-value pair in which the key indicates the index name and the value indicates the number of shards. The number of value shards.
   */
  partition?: { [key: string]: number };
  /**
   * @remarks
   * The status of the index version.
   * 
   * @example
   * STOPPED
   */
  status?: string;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
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
   * id of request
   * 
   * @example
   * 022F36C7-9FB4-5D67-BEBC-3D14B0984463
   */
  requestId?: string;
  /**
   * @remarks
   * List
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

