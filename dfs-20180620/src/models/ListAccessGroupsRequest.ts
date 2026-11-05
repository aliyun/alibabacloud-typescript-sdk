// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * If a single query does not return all results, a non-empty NextToken is returned. You can include the NextToken in the next request to continue the query.
   * 
   * @example
   * MYR6sz6qkmauspAy8oxjHP-tOLtD4KSv3DzI7G6iywTx1ZCExO50GtSuiTB9z0JppvYQ2iUa8s4HbcFanMQfDIlds4da87_Ax4UJMva****
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the returned results.
   * 
   * Valid values:
   * 
   * - CreateTime (default): sorts the results by creation time.
   * - AccessGroupName: sorts the results by access group name.
   * 
   * @example
   * CreateTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order of the returned results.
   * 
   * Valid values:
   * 
   * - ASC (default): ascending order.
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * Specifies the starting position of the query.
   * 
   * Default value: 1.
   * 
   * @example
   * 10
   */
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      inputRegionId: 'InputRegionId',
      limit: 'Limit',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      startOffset: 'StartOffset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRegionId: 'string',
      limit: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      startOffset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

