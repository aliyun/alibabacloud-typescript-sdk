// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetDirectoriesRequestListQuery extends $dara.Model {
  /**
   * @remarks
   * The folder name keyword. Maximum length: 128 characters.
   * 
   * @example
   * Core Metrics
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of expansion levels. This parameter takes effect only in browse mode. Valid values: 1 to 10.
   * 
   * @example
   * 6470568
   */
  maxLevel?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 696844
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50. Valid values: 1 to 200.
   * 
   * @example
   * 7576639
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent folder ID. This parameter takes effect only in browse mode.
   * 
   * @example
   * 466096149777
   */
  parentDirectoryId?: number;
  /**
   * @remarks
   * The topic ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 796027234512
   */
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxLevel: 'MaxLevel',
      page: 'Page',
      pageSize: 'PageSize',
      parentDirectoryId: 'ParentDirectoryId',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxLevel: 'number',
      page: 'number',
      pageSize: 'number',
      parentDirectoryId: 'number',
      topicId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The query parameters.
   * 
   * This parameter is required.
   */
  listQuery?: ListAssetDirectoriesRequestListQuery;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      listQuery: 'ListQuery',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQuery: ListAssetDirectoriesRequestListQuery,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.listQuery && typeof (this.listQuery as any).validate === 'function') {
      (this.listQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

