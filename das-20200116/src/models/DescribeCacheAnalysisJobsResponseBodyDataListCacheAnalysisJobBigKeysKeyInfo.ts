// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisJobsResponseBodyDataListCacheAnalysisJobBigKeysKeyInfo extends $dara.Model {
  /**
   * @remarks
   * The number of bytes that are occupied by the key.
   * 
   * @example
   * 12345
   */
  bytes?: number;
  /**
   * @remarks
   * The number of elements in the key.
   * 
   * @example
   * 127
   */
  count?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * 0
   */
  db?: number;
  /**
   * @remarks
   * The data type of the key.
   * 
   * @example
   * hashtable
   */
  encoding?: string;
  /**
   * @remarks
   * The expiration period of the key. Unit: milliseconds. A value of 0 indicates that the key does not expire.
   * 
   * @example
   * 1596256542547
   */
  expirationTimeMillis?: number;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * task_*****
   */
  key?: string;
  /**
   * @remarks
   * The ID of the data node on the instance.
   * 
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The data type of the instance.
   * 
   * @example
   * hash
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bytes: 'Bytes',
      count: 'Count',
      db: 'Db',
      encoding: 'Encoding',
      expirationTimeMillis: 'ExpirationTimeMillis',
      key: 'Key',
      nodeId: 'NodeId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      count: 'number',
      db: 'number',
      encoding: 'string',
      expirationTimeMillis: 'number',
      key: 'string',
      nodeId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

