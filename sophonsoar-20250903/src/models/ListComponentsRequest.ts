// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * SLS
   */
  componentName?: string;
  /**
   * @remarks
   * The language type for the request and response. Values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The size of the page. Range: 1~100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next page query.
   * 
   * @example
   * kt0BLbenY2XCyRfsmoEcVg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number for pagination, with a default value of 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of items per page for pagination. Range: 1~100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Resource directory member account ID.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

