// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachedMediaInfoResponseBodyAttachedMediaListCategories extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 1000224338
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * Test
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 1000224336
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBodyAttachedMediaList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-*****
   */
  appId?: string;
  /**
   * @remarks
   * The list of categories.
   */
  categories?: GetAttachedMediaInfoResponseBodyAttachedMediaListCategories[];
  /**
   * @remarks
   * The time when the auxiliary media asset was created. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-01T10:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * > This parameter is returned only if the auxiliary media asset has a description.
   * 
   * @example
   * Test description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the auxiliary media asset.
   * 
   * @example
   * 0222e203cf80f9c22870a4d2c****
   */
  mediaId?: string;
  /**
   * @remarks
   * The time when the auxiliary media asset was last updated. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-31T11:42:20Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The status of the auxiliary media asset. Valid values:
   * - **Uploading**: The auxiliary media asset is being uploaded.
   * - **Normal**: Normal.
   * - **UploadFail**: The auxiliary media asset failed to be uploaded.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage address of the auxiliary media asset.
   * 
   * @example
   * outin-bfefbb9*****c7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags.
   * > This parameter is returned only if the auxiliary media asset has tags.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Test subtitle
   */
  title?: string;
  /**
   * @remarks
   * The type of the auxiliary media asset. Valid values:
   * - **watermark**: watermark.
   * - **subtitle**: subtitle.
   * - **material**: material.
   * 
   * @example
   * subtitle
   */
  type?: string;
  /**
   * @remarks
   * The access URL of the auxiliary media asset.
   * > If a CDN domain name is configured for ApsaraVideo VOD, the CDN URL is returned. Otherwise, the OSS URL is returned.
   * 
   * @example
   * https://al*****.cn/subtitle/9843C2*****4E186F19B6.vtt?auth_key=159099f60e0b7fd59****
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      categories: 'Categories',
      creationTime: 'CreationTime',
      description: 'Description',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      type: 'Type',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      categories: { 'type': 'array', 'itemType': GetAttachedMediaInfoResponseBodyAttachedMediaListCategories },
      creationTime: 'string',
      description: 'string',
      mediaId: 'string',
      modificationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      type: 'string',
      URL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttachedMediaInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of auxiliary media assets.
   */
  attachedMediaList?: GetAttachedMediaInfoResponseBodyAttachedMediaList[];
  /**
   * @remarks
   * The IDs of the auxiliary media assets that do not exist.
   */
  nonExistMediaIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 221BCB57-B217-42BF-619BD13378F9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedMediaList: 'AttachedMediaList',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedMediaList: { 'type': 'array', 'itemType': GetAttachedMediaInfoResponseBodyAttachedMediaList },
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachedMediaList)) {
      $dara.Model.validateArray(this.attachedMediaList);
    }
    if(Array.isArray(this.nonExistMediaIds)) {
      $dara.Model.validateArray(this.nonExistMediaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

