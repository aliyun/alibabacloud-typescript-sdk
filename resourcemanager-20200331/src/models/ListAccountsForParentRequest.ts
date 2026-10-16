// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsForParentRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tag_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsForParentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return tag information. Valid values:
   * 
   * - false (default): Does not return tag information.
   * - true: Returns tag information.
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource folder.
   * 
   * @example
   * fd-bVaRIG****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The query keyword, such as the member name.
   * 
   * Fuzzy match is supported.
   * 
   * @example
   * admin
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The tags used to filter member accounts.
   */
  tag?: ListAccountsForParentRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderId: 'ParentFolderId',
      queryKeyword: 'QueryKeyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderId: 'string',
      queryKeyword: 'string',
      tag: { 'type': 'array', 'itemType': ListAccountsForParentRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

