// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * Asset UUID.
   * 
   * @example
   * 1C5F11E9-****-51F0-****-43BB312A0557
   */
  componentAssetUuid?: string;
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
   * The language type for requests and responses. Values:
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
   * Maximum number of results to return. Range: 0~100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query. Value: Not required for the first query or if there is no next query. For subsequent queries, use the NextToken value returned from the previous API call.
   * 
   * @example
   * kt0BLbenY2XCyRfsmoEcVg==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number for paginated queries, with a default value of 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page for paginated queries. Range: 1~100.
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
      componentAssetUuid: 'ComponentAssetUuid',
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
      componentAssetUuid: 'string',
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

