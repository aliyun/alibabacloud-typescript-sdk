// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DentryAppPropertiesValue } from "./DentryAppPropertiesValue";


export class QueryDentriesInfoResponseBodyDentryProperties extends $dara.Model {
  /**
   * @example
   * True
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      readOnly: 'ReadOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentriesInfoResponseBodyDentryThumbnail extends $dara.Model {
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * xxx
   */
  url?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      url: 'Url',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      url: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentriesInfoResponseBodyDentry extends $dara.Model {
  appProperties?: { [key: string]: DentryAppPropertiesValue[] };
  /**
   * @example
   * 2025-03-26T02:19:35Z
   */
  createTime?: string;
  /**
   * @example
   * qt8bGiSa7WnHKeRPtMuoiSJwiE
   */
  creatorId?: string;
  /**
   * @example
   * txt
   */
  extension?: string;
  /**
   * @example
   * 140901622636
   */
  id?: string;
  modifiedTime?: string;
  /**
   * @example
   * qt8bGiSa7WnHKeRPtMuoiSJwiE
   */
  modifierId?: string;
  name?: string;
  /**
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @example
   * PUBLIC_OSS_PARTITION
   */
  partitionType?: string;
  path?: string;
  properties?: QueryDentriesInfoResponseBodyDentryProperties;
  /**
   * @example
   * 512
   */
  size?: number;
  /**
   * @example
   * 22443475065
   */
  spaceId?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @example
   * DINGTALK
   */
  storageDriver?: string;
  thumbnail?: QueryDentriesInfoResponseBodyDentryThumbnail;
  /**
   * @example
   * FILE
   */
  type?: string;
  /**
   * @example
   * 1716258459684
   */
  uuid?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      appProperties: 'AppProperties',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      extension: 'Extension',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      parentId: 'ParentId',
      partitionType: 'PartitionType',
      path: 'Path',
      properties: 'Properties',
      size: 'Size',
      spaceId: 'SpaceId',
      status: 'Status',
      storageDriver: 'StorageDriver',
      thumbnail: 'Thumbnail',
      type: 'Type',
      uuid: 'Uuid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appProperties: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DentryAppPropertiesValue } },
      createTime: 'string',
      creatorId: 'string',
      extension: 'string',
      id: 'string',
      modifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      parentId: 'string',
      partitionType: 'string',
      path: 'string',
      properties: QueryDentriesInfoResponseBodyDentryProperties,
      size: 'number',
      spaceId: 'string',
      status: 'string',
      storageDriver: 'string',
      thumbnail: QueryDentriesInfoResponseBodyDentryThumbnail,
      type: 'string',
      uuid: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.appProperties) {
      $dara.Model.validateMap(this.appProperties);
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.thumbnail && typeof (this.thumbnail as any).validate === 'function') {
      (this.thumbnail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDentriesInfoResponseBody extends $dara.Model {
  dentry?: QueryDentriesInfoResponseBodyDentry;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      dentry: 'Dentry',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentry: QueryDentriesInfoResponseBodyDentry,
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.dentry && typeof (this.dentry as any).validate === 'function') {
      (this.dentry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

