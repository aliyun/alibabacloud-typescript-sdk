// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupabaseInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name. Exact match is used for filtering. Separate multiple names with commas.
   * 
   * @example
   * pxsp-hz********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance description. Fuzzy match is used for filtering.
   * 
   * @example
   * project name
   */
  description?: string;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query. Maximum value: 100. Default value: 10. If you do not specify the Settings or the Settings value is less than 10, the default value is 10. If the Settings value is greater than 100, the default value is 100. This parameter is used for paging.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * xxdds
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      description: 'Description',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      description: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

