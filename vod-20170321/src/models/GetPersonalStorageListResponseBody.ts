// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPersonalStorageListResponseBodyStorageInfoListStorageInfo extends $dara.Model {
  extranetEndpoint?: string;
  gmtCreate?: string;
  intranetEndpoint?: string;
  location?: string;
  ownerId?: number;
  storageACL?: string;
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      extranetEndpoint: 'ExtranetEndpoint',
      gmtCreate: 'GmtCreate',
      intranetEndpoint: 'IntranetEndpoint',
      location: 'Location',
      ownerId: 'OwnerId',
      storageACL: 'StorageACL',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extranetEndpoint: 'string',
      gmtCreate: 'string',
      intranetEndpoint: 'string',
      location: 'string',
      ownerId: 'number',
      storageACL: 'string',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonalStorageListResponseBodyStorageInfoList extends $dara.Model {
  storageInfo?: GetPersonalStorageListResponseBodyStorageInfoListStorageInfo[];
  static names(): { [key: string]: string } {
    return {
      storageInfo: 'StorageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageInfo: { 'type': 'array', 'itemType': GetPersonalStorageListResponseBodyStorageInfoListStorageInfo },
    };
  }

  validate() {
    if(Array.isArray(this.storageInfo)) {
      $dara.Model.validateArray(this.storageInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPersonalStorageListResponseBody extends $dara.Model {
  requestId?: string;
  storageInfoList?: GetPersonalStorageListResponseBodyStorageInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      storageInfoList: 'StorageInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      storageInfoList: GetPersonalStorageListResponseBodyStorageInfoList,
    };
  }

  validate() {
    if(this.storageInfoList && typeof (this.storageInfoList as any).validate === 'function') {
      (this.storageInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

