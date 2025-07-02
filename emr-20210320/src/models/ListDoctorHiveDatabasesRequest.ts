// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The database names.
   * 
   * @example
   * null
   */
  databaseNames?: string[];
  /**
   * @remarks
   * The query date.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The basis on which you want to sort the query results. Valid values:
   * 
   * *   tableCount: the number of tables
   * 
   * @example
   * tableCount
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values:
   * 
   * *   ASC: in ascending order
   * *   DESC: in descending order
   * 
   * @example
   * ASC
   */
  orderType?: string;
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
      clusterId: 'ClusterId',
      databaseNames: 'DatabaseNames',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseNames: { 'type': 'array', 'itemType': 'string' },
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseNames)) {
      $dara.Model.validateArray(this.databaseNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

