// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetTagsResponseBodyPagingInfoDataAssetTags extends $dara.Model {
  /**
   * @remarks
   * The tag type.
   * - Normal
   * - System
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The creation time of the tag.
   * 
   * The value is a 13-digit number, such as `1735890003000`.
   * 
   * @example
   * 1735890003000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the tag.
   * 
   * @example
   * 12345
   */
  createUser?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a description
   */
  description?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The list of tag administrators.
   */
  managers?: string[];
  /**
   * @remarks
   * The last modification time of the tag.
   * 
   * The value is a 13-digit number, such as `1735890003000`.
   * 
   * @example
   * 1735890003000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user who last modified the tag.
   * 
   * @example
   * 1234
   */
  modifyUser?: string;
  /**
   * @remarks
   * The type of the tag value.
   * 
   * @example
   * String
   */
  valueType?: string;
  /**
   * @remarks
   * The list of tag values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      key: 'Key',
      managers: 'Managers',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      valueType: 'ValueType',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      key: 'string',
      managers: { 'type': 'array', 'itemType': 'string' },
      modifyTime: 'number',
      modifyUser: 'string',
      valueType: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.managers)) {
      $dara.Model.validateArray(this.managers);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAssetTagsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of tags.
   */
  dataAssetTags?: ListDataAssetTagsResponseBodyPagingInfoDataAssetTags[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2524
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataAssetTags: 'DataAssetTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssetTags: { 'type': 'array', 'itemType': ListDataAssetTagsResponseBodyPagingInfoDataAssetTags },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataAssetTags)) {
      $dara.Model.validateArray(this.dataAssetTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAssetTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated query results for the tag list.
   */
  pagingInfo?: ListDataAssetTagsResponseBodyPagingInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0bc1ec92159376****
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
      pagingInfo: ListDataAssetTagsResponseBodyPagingInfo,
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

