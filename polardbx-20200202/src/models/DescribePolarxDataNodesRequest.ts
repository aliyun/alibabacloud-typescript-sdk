// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarxDataNodesRequest extends $dara.Model {
  /**
   * @example
   * dn
   */
  nodeType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
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

