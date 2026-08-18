// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSnapshotsResponseBodyPagingInfoSnapshots extends $dara.Model {
  /**
   * @remarks
   * The snapshot comment.
   * 
   * @example
   * snapshot comment
   */
  comment?: string;
  /**
   * @remarks
   * The snapshot creation time, in millisecond UNIX timestamp.
   * 
   * @example
   * 1782370983000
   */
  createTime?: number;
  /**
   * @remarks
   * The employee ID of the submitter.
   * 
   * @example
   * 209508679263509059
   */
  creator?: string;
  /**
   * @remarks
   * The unique ID of the snapshot.
   * 
   * @example
   * 8b723a9e8bd443af920b77e39aeb4f63
   */
  id?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * 1389623
   */
  namespace?: string;
  /**
   * @remarks
   * The unique ID of the object to which the snapshot belongs.
   * 
   * @example
   * 8467231038932407294
   */
  objectId?: string;
  /**
   * @remarks
   * The snapshot type.
   * 
   * @example
   * Saved
   */
  type?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 2
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      namespace: 'Namespace',
      objectId: 'ObjectId',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      creator: 'string',
      id: 'string',
      namespace: 'string',
      objectId: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of snapshots.
   */
  snapshots?: ListSnapshotsResponseBodyPagingInfoSnapshots[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      snapshots: { 'type': 'array', 'itemType': ListSnapshotsResponseBodyPagingInfoSnapshots },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListSnapshotsResponseBodyPagingInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0bc14115-1234-5678-ABCD-159376359
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListSnapshotsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

