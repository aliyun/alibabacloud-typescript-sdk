// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSnapshotResponseBodySnapshotContent extends $dara.Model {
  /**
   * @remarks
   * The node script content.
   * 
   * @example
   * SELECT 1
   */
  content?: string;
  /**
   * @remarks
   * FlowSpec JSON
   * 
   * @example
   * {"version":"1.1.0"}
   */
  spec?: string;
  /**
   * @remarks
   * The stage code.
   * 
   * @example
   * DEV
   */
  stageCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      spec: 'Spec',
      stageCode: 'StageCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      spec: 'string',
      stageCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotResponseBodySnapshot extends $dara.Model {
  /**
   * @remarks
   * The submit comment.
   * 
   * @example
   * snapshot comment
   */
  comment?: string;
  /**
   * @remarks
   * The structured snapshot content. This parameter is mutually exclusive with ContentUrl.
   */
  content?: GetSnapshotResponseBodySnapshotContent;
  /**
   * @remarks
   * The OSS pre-signed download URL. This parameter is mutually exclusive with Content.
   * 
   * @example
   * https://oss.example.com/presigned
   */
  contentUrl?: string;
  /**
   * @remarks
   * The snapshot creation time in millisecond timestamp.
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
      content: 'Content',
      contentUrl: 'ContentUrl',
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
      content: GetSnapshotResponseBodySnapshotContent,
      contentUrl: 'string',
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
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0bc14115-1234-5678-ABCD-159376359
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot.
   */
  snapshot?: GetSnapshotResponseBodySnapshot;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshot: GetSnapshotResponseBodySnapshot,
    };
  }

  validate() {
    if(this.snapshot && typeof (this.snapshot as any).validate === 'function') {
      (this.snapshot as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

