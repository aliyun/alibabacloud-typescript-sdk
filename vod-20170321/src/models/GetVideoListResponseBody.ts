// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListResponseBodyVideoListVideoSnapshots extends $dara.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBodyVideoListVideo extends $dara.Model {
  appId?: string;
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  modificationTime?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  restoreExpiration?: string;
  restoreStatus?: string;
  size?: number;
  snapshots?: GetVideoListResponseBodyVideoListVideoSnapshots;
  status?: string;
  storageClass?: string;
  storageLocation?: string;
  tags?: string;
  title?: string;
  userData?: string;
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modificationTime: 'ModificationTime',
      referenceId: 'ReferenceId',
      restoreExpiration: 'RestoreExpiration',
      restoreStatus: 'RestoreStatus',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageClass: 'StorageClass',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modificationTime: 'string',
      referenceId: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      size: 'number',
      snapshots: GetVideoListResponseBodyVideoListVideoSnapshots,
      status: 'string',
      storageClass: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBodyVideoList extends $dara.Model {
  video?: GetVideoListResponseBodyVideoListVideo[];
  static names(): { [key: string]: string } {
    return {
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video: { 'type': 'array', 'itemType': GetVideoListResponseBodyVideoListVideo },
    };
  }

  validate() {
    if(Array.isArray(this.video)) {
      $dara.Model.validateArray(this.video);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of media files returned.
   * 
   * @example
   * 100
   */
  total?: number;
  videoList?: GetVideoListResponseBodyVideoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      videoList: 'VideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      videoList: GetVideoListResponseBodyVideoList,
    };
  }

  validate() {
    if(this.videoList && typeof (this.videoList as any).validate === 'function') {
      (this.videoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

