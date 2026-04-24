// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail extends $dara.Model {
  bytesPerMinute?: number;
  /**
   * **if can be null:**
   * false
   */
  disableWriteWindows?: string;
  partsPerMinute?: number;
  progress?: string;
  sourceControlVersion?: string;
  sourceDBCluster?: string;
  status?: string;
  subJob?: string;
  subJobMessage?: string;
  subJobStatus?: string;
  targetControlVersion?: string;
  targetDBCluster?: string;
  unsyncedBytes?: number;
  unsyncedParts?: number;
  static names(): { [key: string]: string } {
    return {
      bytesPerMinute: 'BytesPerMinute',
      disableWriteWindows: 'DisableWriteWindows',
      partsPerMinute: 'PartsPerMinute',
      progress: 'Progress',
      sourceControlVersion: 'SourceControlVersion',
      sourceDBCluster: 'SourceDBCluster',
      status: 'Status',
      subJob: 'SubJob',
      subJobMessage: 'SubJobMessage',
      subJobStatus: 'SubJobStatus',
      targetControlVersion: 'TargetControlVersion',
      targetDBCluster: 'TargetDBCluster',
      unsyncedBytes: 'UnsyncedBytes',
      unsyncedParts: 'UnsyncedParts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesPerMinute: 'number',
      disableWriteWindows: 'string',
      partsPerMinute: 'number',
      progress: 'string',
      sourceControlVersion: 'string',
      sourceDBCluster: 'string',
      status: 'string',
      subJob: 'string',
      subJobMessage: 'string',
      subJobStatus: 'string',
      targetControlVersion: 'string',
      targetDBCluster: 'string',
      unsyncedBytes: 'number',
      unsyncedParts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryResponseBodyHistoryDetails extends $dara.Model {
  historyDetail?: DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail[];
  static names(): { [key: string]: string } {
    return {
      historyDetail: 'HistoryDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetail: { 'type': 'array', 'itemType': DescribeTransferHistoryResponseBodyHistoryDetailsHistoryDetail },
    };
  }

  validate() {
    if(Array.isArray(this.historyDetail)) {
      $dara.Model.validateArray(this.historyDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransferHistoryResponseBody extends $dara.Model {
  historyDetails?: DescribeTransferHistoryResponseBodyHistoryDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05321590-BB65-4720-8CB6-8218E041CDD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      historyDetails: 'HistoryDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyDetails: DescribeTransferHistoryResponseBodyHistoryDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.historyDetails && typeof (this.historyDetails as any).validate === 'function') {
      (this.historyDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

