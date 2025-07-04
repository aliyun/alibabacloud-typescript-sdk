// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo } from "./GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo";
import { GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo } from "./GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo";


export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList extends $dara.Model {
  /**
   * @remarks
   * The information about the advanced configuration.
   */
  advanceConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo;
  /**
   * @remarks
   * The name of the worker that failed due to a deployment failure.
   */
  deployFailedWorker?: string[];
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 2
   */
  docSize?: number;
  /**
   * @remarks
   * The configuration progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0A3B1C48006A6C0905F6375F4821EB50
   */
  errorMsg?: string;
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * " "
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The time when the full index version was generated.
   * 
   * @example
   * 123423
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time when incremental data in the index was last updated.
   * 
   * @example
   * ""
   */
  incUpdateTime?: string;
  /**
   * @remarks
   * The time when the incremental index version was generated.
   * 
   * @example
   * 123423
   */
  incVersion?: number;
  /**
   * @remarks
   * The information about the index configuration.
   */
  indexConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo;
  /**
   * @remarks
   * The index size.
   * 
   * @example
   * 100
   */
  indexSize?: number;
  /**
   * @remarks
   * The name of the worker that failed due to insufficient disks.
   */
  lackDiskWorker?: string[];
  /**
   * @remarks
   * The name of the worker that failed due to insufficient memory.
   */
  lackMemWorker?: string[];
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-c4d2rq7nt04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      advanceConfigInfo: 'advanceConfigInfo',
      deployFailedWorker: 'deployFailedWorker',
      docSize: 'docSize',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      errorMsg: 'errorMsg',
      fullUpdateTime: 'fullUpdateTime',
      fullVersion: 'fullVersion',
      incUpdateTime: 'incUpdateTime',
      incVersion: 'incVersion',
      indexConfigInfo: 'indexConfigInfo',
      indexSize: 'indexSize',
      lackDiskWorker: 'lackDiskWorker',
      lackMemWorker: 'lackMemWorker',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceConfigInfo: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo,
      deployFailedWorker: { 'type': 'array', 'itemType': 'string' },
      docSize: 'number',
      donePercent: 'number',
      doneSize: 'number',
      errorMsg: 'string',
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      incVersion: 'number',
      indexConfigInfo: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo,
      indexSize: 'number',
      lackDiskWorker: { 'type': 'array', 'itemType': 'string' },
      lackMemWorker: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(this.advanceConfigInfo && typeof (this.advanceConfigInfo as any).validate === 'function') {
      (this.advanceConfigInfo as any).validate();
    }
    if(Array.isArray(this.deployFailedWorker)) {
      $dara.Model.validateArray(this.deployFailedWorker);
    }
    if(this.indexConfigInfo && typeof (this.indexConfigInfo as any).validate === 'function') {
      (this.indexConfigInfo as any).validate();
    }
    if(Array.isArray(this.lackDiskWorker)) {
      $dara.Model.validateArray(this.lackDiskWorker);
    }
    if(Array.isArray(this.lackMemWorker)) {
      $dara.Model.validateArray(this.lackMemWorker);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

