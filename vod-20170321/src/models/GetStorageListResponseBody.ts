// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageListResponseBodyStorageListStorage extends $dara.Model {
  appId?: string;
  defaultUpload?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: string;
  location?: string;
  region?: string;
  resourceGroupId?: string;
  status?: number;
  storageUsage?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      defaultUpload: 'DefaultUpload',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupId: 'GroupId',
      location: 'Location',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      storageUsage: 'StorageUsage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      defaultUpload: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'string',
      location: 'string',
      region: 'string',
      resourceGroupId: 'string',
      status: 'number',
      storageUsage: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageListResponseBodyStorageList extends $dara.Model {
  storage?: GetStorageListResponseBodyStorageListStorage[];
  static names(): { [key: string]: string } {
    return {
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storage: { 'type': 'array', 'itemType': GetStorageListResponseBodyStorageListStorage },
    };
  }

  validate() {
    if(Array.isArray(this.storage)) {
      $dara.Model.validateArray(this.storage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageListResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  storageList?: GetStorageListResponseBodyStorageList;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      storageList: 'StorageList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      storageList: GetStorageListResponseBodyStorageList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.storageList && typeof (this.storageList as any).validate === 'function') {
      (this.storageList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

