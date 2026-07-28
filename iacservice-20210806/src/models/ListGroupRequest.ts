// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The search keyword. Name-based search is supported.
   * 
   * @example
   * test-case2
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of results to return per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 200
   */
  pageSize?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-14e80de4866bf7ffed0c4072ed9b37
   */
  projectId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'string',
      tag: { 'type': 'array', 'itemType': ListGroupRequestTag },
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

