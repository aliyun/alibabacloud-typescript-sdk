// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableWarehouseAutoScaleRequest extends $dara.Model {
  /**
   * @example
   * 3
   */
  maxClusterCount?: string;
  /**
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

