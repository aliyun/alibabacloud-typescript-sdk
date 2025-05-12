// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAdOrganizationUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The string that you enter for fuzzy search.
   * 
   * @example
   * develop
   */
  filter?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 500. Default value: 500.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request or if no next request exists. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * CAAAAA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The enterprise AD office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-485361****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

