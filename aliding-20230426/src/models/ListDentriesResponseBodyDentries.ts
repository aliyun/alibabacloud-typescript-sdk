// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DentriesAppPropertiesValue } from "./DentriesAppPropertiesValue";
import { ListDentriesResponseBodyDentriesProperties } from "./ListDentriesResponseBodyDentriesProperties";
import { ListDentriesResponseBodyDentriesThumbnail } from "./ListDentriesResponseBodyDentriesThumbnail";


export class ListDentriesResponseBodyDentries extends $dara.Model {
  appProperties?: { [key: string]: DentriesAppPropertiesValue[] };
  /**
   * @example
   * 2022-01-01T10:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * cHtUxxxxx
   */
  creatorId?: string;
  /**
   * @example
   * txt
   */
  extension?: string;
  /**
   * @example
   * 657xxxxx
   */
  id?: string;
  /**
   * @example
   * 2022-01-01T10:00:00Z
   */
  modifiedTime?: string;
  /**
   * @example
   * cHtUxxxxx
   */
  modifierId?: string;
  /**
   * @example
   * 测试文件夹
   */
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
  /**
   * @example
   * ./test.txt
   */
  path?: string;
  properties?: ListDentriesResponseBodyDentriesProperties;
  /**
   * @example
   * 512
   */
  size?: number;
  /**
   * @example
   * 854xxxxx
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
  thumbnail?: ListDentriesResponseBodyDentriesThumbnail;
  /**
   * @example
   * FILE
   */
  type?: string;
  /**
   * @example
   * 123xxxxx
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
      appProperties: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DentriesAppPropertiesValue } },
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
      properties: ListDentriesResponseBodyDentriesProperties,
      size: 'number',
      spaceId: 'string',
      status: 'string',
      storageDriver: 'string',
      thumbnail: ListDentriesResponseBodyDentriesThumbnail,
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

