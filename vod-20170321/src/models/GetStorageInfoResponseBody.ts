// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageInfoResponseBodyDomainInfoListDomainInfo extends $dara.Model {
  defaultPlay?: boolean;
  domainCname?: string;
  domainName?: string;
  domainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      defaultPlay: 'DefaultPlay',
      domainCname: 'DomainCname',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultPlay: 'boolean',
      domainCname: 'string',
      domainName: 'string',
      domainStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageInfoResponseBodyDomainInfoList extends $dara.Model {
  domainInfo?: GetStorageInfoResponseBodyDomainInfoListDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': GetStorageInfoResponseBodyDomainInfoListDomainInfo },
    };
  }

  validate() {
    if(Array.isArray(this.domainInfo)) {
      $dara.Model.validateArray(this.domainInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageInfoResponseBodyStorage extends $dara.Model {
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

export class GetStorageInfoResponseBody extends $dara.Model {
  domainInfoList?: GetStorageInfoResponseBodyDomainInfoList;
  requestId?: string;
  storage?: GetStorageInfoResponseBodyStorage;
  storageACL?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfoList: 'DomainInfoList',
      requestId: 'RequestId',
      storage: 'Storage',
      storageACL: 'StorageACL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfoList: GetStorageInfoResponseBodyDomainInfoList,
      requestId: 'string',
      storage: GetStorageInfoResponseBodyStorage,
      storageACL: 'string',
    };
  }

  validate() {
    if(this.domainInfoList && typeof (this.domainInfoList as any).validate === 'function') {
      (this.domainInfoList as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

