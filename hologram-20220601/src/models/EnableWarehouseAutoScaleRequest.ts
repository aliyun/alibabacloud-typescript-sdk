// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableWarehouseAutoScaleRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of clusters. The value must be greater than the number of reserved clusters and less than or equal to 4.
   * 
   * @example
   * 3
   */
  maxClusterCount?: string;
  /**
   * @remarks
   * The name of the compute group.
   * 
   * @example
   * my_warehouse
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      maxClusterCount: 'maxClusterCount',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxClusterCount: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

