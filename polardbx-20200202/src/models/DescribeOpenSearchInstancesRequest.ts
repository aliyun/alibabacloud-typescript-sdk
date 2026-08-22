// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenSearchInstancesRequest extends $dara.Model {
  /**
   * @example
   * pxc-spsil01pww4hfz
   */
  DBInstanceName?: string;
  /**
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @example
   * xxdds
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
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

