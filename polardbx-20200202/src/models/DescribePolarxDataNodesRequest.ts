// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarxDataNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of nodes to query. Valid values:
   * - all: Queries both dn and gms nodes.
   * - gms: Queries only gms nodes.
   * - dn: Queries only dn nodes.
   * 
   * @example
   * dn
   */
  nodeType?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than 0 and less than or equal to the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * pc-bp1c5w4fx****2274
   */
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'NodeType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

