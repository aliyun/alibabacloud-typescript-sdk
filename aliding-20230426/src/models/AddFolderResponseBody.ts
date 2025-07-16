// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DentryAppPropertiesValue } from "./DentryAppPropertiesValue";


export class AddFolderResponseBodyDentryProperties extends $dara.Model {
  /**
   * @example
   * true
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

export class AddFolderResponseBodyDentry extends $dara.Model {
  appProperties?: { [key: string]: DentryAppPropertiesValue[] };
  /**
   * @example
   * 2022-01-01T10:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * creator_id
   */
  creatorId?: string;
  /**
   * @example
   * txt
   */
  extension?: string;
  /**
   * @example
   * dentry_id
   */
  id?: string;
  /**
   * @example
   * 2022-01-01T10:00:00Z
   */
  modifiedTime?: string;
  /**
   * @example
   * modifier_id
   */
  modifierId?: string;
  /**
   * @example
   * dentry_name
   */
  name?: string;
  /**
   * @example
   * 163201723391
   */
  parentId?: string;
  /**
   * @example
   * PUBLIC_OSS_PARTITION
   */
  partitionType?: string;
  /**
   * @example
   * ./test.txt
   */
  path?: string;
  properties?: AddFolderResponseBodyDentryProperties;
  /**
   * @example
   * 6020771
   */
  size?: number;
  /**
   * @example
   * Ao01nSzzBxZQ68JW
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
  /**
   * @example
   * FOLDER
   */
  type?: string;
  /**
   * @example
   * 80a7201602b34450a7a97d8d4e255421
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
      properties: AddFolderResponseBodyDentryProperties,
      size: 'number',
      spaceId: 'string',
      status: 'string',
      storageDriver: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFolderResponseBody extends $dara.Model {
  dentry?: AddFolderResponseBodyDentry;
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
      dentry: 'dentry',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentry: AddFolderResponseBodyDentry,
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

