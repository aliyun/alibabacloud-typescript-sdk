// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileSystemsRequest extends $dara.Model {
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
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token. If a query does not return all directories, a non-empty NextToken is returned. You can specify the NextToken in the next request to continue the query.
   * 
   * @example
   * tCSKxtX5z_fW0-Q0ug8Df1oSXGiamAjmrtaDFAj6sZW-YhN1lRC7TEIkcFfMuj-6uR9wSW4b_PS2ze70k269qy8bMVHDfRW0Tvhmyh-****
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the returned results. Valid values:
   * - CreateTime: Sorts the results by creation time. This is the default value.
   * - FileSystemName: Sorts the results by file system name.
   * - SpaceCapacity: Sorts the results by file system capacity budget.
   * - UsedSpaceSize: Sorts the results by file system used space.
   * 
   * @example
   * CreateTime
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which to sort the returned results. Valid values:
   * - ASC: Ascending order. This is the default value.
   * - DESC: Descending order.
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * Specifies the starting position of the query. Default value: 1.
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

