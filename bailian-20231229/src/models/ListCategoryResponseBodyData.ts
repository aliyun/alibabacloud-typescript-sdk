// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCategoryResponseBodyDataCategoryList } from "./ListCategoryResponseBodyDataCategoryList";


export class ListCategoryResponseBodyData extends $dara.Model {
  categoryList?: ListCategoryResponseBodyDataCategoryList[];
  /**
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh7Z4G8jiXR6IjHYd+M9WQVJ
   */
  nextToken?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      categoryList: 'CategoryList',
      hasNext: 'HasNext',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryList: { 'type': 'array', 'itemType': ListCategoryResponseBodyDataCategoryList },
      hasNext: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categoryList)) {
      $dara.Model.validateArray(this.categoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

