// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The skill category code. Separate multiple codes with commas. For a second-level category, use the format: first-level category.second-level category.
   * 
   * @example
   * compute.serverless,network
   */
  categoryCode?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * ecs
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Set this to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  searchMode?: string;
  /**
   * @remarks
   * The number of entries to skip for pagination.
   * 
   * @example
   * 10
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'categoryCode',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchMode: 'searchMode',
      skip: 'skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      searchMode: 'string',
      skip: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

