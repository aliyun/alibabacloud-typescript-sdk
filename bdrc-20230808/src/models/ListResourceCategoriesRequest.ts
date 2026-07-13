// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceCategoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If more entries are to be returned on the next page, a pagination token is returned. Note: If this parameter returns data, it indicates there is a next page. You can use the returned NextToken as a request parameter to obtain the next page of data until it returns Null, indicating all data has been retrieved.
   * 
   * @example
   * cae**********699
   */
  nextToken?: string;
  /**
   * @example
   * rc-123****7890
   */
  resourceCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceCategoryId: 'ResourceCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceCategoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

