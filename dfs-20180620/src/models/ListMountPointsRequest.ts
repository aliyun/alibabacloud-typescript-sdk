// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMountPointsRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 37af8f42-2abc-4e74-889d-664f5163****
   */
  fileSystemId?: string;
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
   * Valid values: 1 to 1000.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * If a query does not return all results, a non-empty NextToken is returned. You can include the NextToken in a subsequent query to retrieve the remaining results.
   * 
   * @example
   * MYR6sz6qkmauspAy8oxjHP-tOLtD4KSv3DzI7G6iywTx1ZCExO50GtSuiTB9z0JppvYQ2iUa8s4HbcFanMQfDIlds4da87_Ax4UJMva****
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the returned results.
   * 
   * Default value: CreateTime (sorted by creation time).
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
   * Default value: 1.
   * 
   * @example
   * 10
   */
  startOffset?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
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
      fileSystemId: 'string',
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

