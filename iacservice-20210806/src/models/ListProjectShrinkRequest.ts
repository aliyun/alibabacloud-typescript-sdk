// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectShrinkRequest extends $dara.Model {
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
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      tagShrink: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

