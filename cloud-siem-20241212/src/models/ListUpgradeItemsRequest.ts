// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUpgradeItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response messages. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is required. If it is not specified, the service returns a 400 error (The specified Lang can not be empty.).
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a single call.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request or if there are no more results to return. If a next page exists, set this parameter to the value of NextToken returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region where the data management center of Cloud Threat Detection and Response (CTDR) resides. Select the region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member account that the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      roleFor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

