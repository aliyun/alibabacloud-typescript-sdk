// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSupabaseInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name. This parameter is used for exact match filtering. Separate multiple instance names with commas (,).
   * 
   * @example
   * pxsp-hz********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance description. This parameter supports fuzzy match.
   * 
   * @example
   * project name
   */
  description?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 100. Default value: If you do not specify this parameter or specify a value less than 10, the default value is 10. If you specify a value greater than 100, the default value is 100.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * xxdds
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
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

