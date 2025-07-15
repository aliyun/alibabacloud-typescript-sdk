// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfosSnapshotDataInfo extends $dara.Model {
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 20180209
   */
  date?: string;
  /**
   * @remarks
   * The total number of snapshots that were captured on the day.
   * 
   * @example
   * 110
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfos extends $dara.Model {
  snapshotDataInfo?: DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfosSnapshotDataInfo[];
  static names(): { [key: string]: string } {
    return {
      snapshotDataInfo: 'SnapshotDataInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotDataInfo: { 'type': 'array', 'itemType': DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfosSnapshotDataInfo },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotDataInfo)) {
      $dara.Model.validateArray(this.snapshotDataInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainSnapshotDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693F
   */
  requestId?: string;
  /**
   * @remarks
   * The daily statistics on the number of snapshots.
   */
  snapshotDataInfos?: DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotDataInfos: 'SnapshotDataInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotDataInfos: DescribeLiveDomainSnapshotDataResponseBodySnapshotDataInfos,
    };
  }

  validate() {
    if(this.snapshotDataInfos && typeof (this.snapshotDataInfos as any).validate === 'function') {
      (this.snapshotDataInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

