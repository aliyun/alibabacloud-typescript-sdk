// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access group.
   * 
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
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
   * Default value: 10
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * If a single query does not return all entries, a non-empty NextToken is returned. You can specify the NextToken in a subsequent query to continue the query.
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
   * - Priority (default): sort by priority
   * - CreateTime: sort by creation time
   * 
   * @example
   * Priority
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order of the returned results.
   * 
   * Valid values:
   * 
   * - ASC (default): ascending order
   * - DESC: descending order
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * Specifies the starting position of the query.
   * 
   * Default value: 1
   * 
   * @example
   * 10
   */
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
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
      accessGroupId: 'string',
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

