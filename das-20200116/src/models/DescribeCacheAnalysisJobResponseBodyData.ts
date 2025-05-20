// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobResponseBodyDataBigKeys } from "./DescribeCacheAnalysisJobResponseBodyDataBigKeys";
import { DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum } from "./DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum";
import { DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount } from "./DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount";
import { DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes } from "./DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes";
import { DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes } from "./DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes";
import { DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum } from "./DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum";


export class DescribeCacheAnalysisJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the large keys. The returned large keys are sorted in descending order based on the number of bytes occupied by the keys.
   */
  bigKeys?: DescribeCacheAnalysisJobResponseBodyDataBigKeys;
  /**
   * @remarks
   * The details of the large keys. The returned large keys are sorted in descending order based on the number of keys.
   */
  bigKeysOfNum?: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum;
  /**
   * @remarks
   * The statistics of the keys that have expired.
   */
  expiryKeysLevelCount?: DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the cache analysis task.
   * 
   * @example
   * sf79-sd99-sa37-****
   */
  jobId?: string;
  /**
   * @remarks
   * The prefixes of the keys.
   */
  keyPrefixes?: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message that contains information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the data node on the instance.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The state of the cache analysis task. Valid values:
   * 
   * *   **BACKUP**: The data is being backed up.
   * *   **ANALYZING**: The data is being analyzed.
   * *   **FINISHED**: The data is analyzed.
   * *   **FAILED**: An error occurred.
   * 
   * @example
   * BACKUP
   */
  taskState?: string;
  /**
   * @remarks
   * The details of permanent keys. The returned keys are sorted in descending order based on the number of bytes occupied by the keys.
   */
  unexBigKeysOfBytes?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes;
  /**
   * @remarks
   * The details of permanent keys. The returned keys are sorted in descending order based on the number of keys.
   */
  unexBigKeysOfNum?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum;
  static names(): { [key: string]: string } {
    return {
      bigKeys: 'BigKeys',
      bigKeysOfNum: 'BigKeysOfNum',
      expiryKeysLevelCount: 'ExpiryKeysLevelCount',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      keyPrefixes: 'KeyPrefixes',
      message: 'Message',
      nodeId: 'NodeId',
      taskState: 'TaskState',
      unexBigKeysOfBytes: 'UnexBigKeysOfBytes',
      unexBigKeysOfNum: 'UnexBigKeysOfNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bigKeys: DescribeCacheAnalysisJobResponseBodyDataBigKeys,
      bigKeysOfNum: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum,
      expiryKeysLevelCount: DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount,
      instanceId: 'string',
      jobId: 'string',
      keyPrefixes: DescribeCacheAnalysisJobResponseBodyDataKeyPrefixes,
      message: 'string',
      nodeId: 'string',
      taskState: 'string',
      unexBigKeysOfBytes: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes,
      unexBigKeysOfNum: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum,
    };
  }

  validate() {
    if(this.bigKeys && typeof (this.bigKeys as any).validate === 'function') {
      (this.bigKeys as any).validate();
    }
    if(this.bigKeysOfNum && typeof (this.bigKeysOfNum as any).validate === 'function') {
      (this.bigKeysOfNum as any).validate();
    }
    if(this.expiryKeysLevelCount && typeof (this.expiryKeysLevelCount as any).validate === 'function') {
      (this.expiryKeysLevelCount as any).validate();
    }
    if(this.keyPrefixes && typeof (this.keyPrefixes as any).validate === 'function') {
      (this.keyPrefixes as any).validate();
    }
    if(this.unexBigKeysOfBytes && typeof (this.unexBigKeysOfBytes as any).validate === 'function') {
      (this.unexBigKeysOfBytes as any).validate();
    }
    if(this.unexBigKeysOfNum && typeof (this.unexBigKeysOfNum as any).validate === 'function') {
      (this.unexBigKeysOfNum as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

