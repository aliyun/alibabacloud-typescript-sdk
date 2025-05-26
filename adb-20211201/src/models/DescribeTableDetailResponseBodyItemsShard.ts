// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableDetailResponseBodyItemsShard extends $dara.Model {
  /**
   * @remarks
   * The shard ID. Only the numeric part of the shard name is returned.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 9484858
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

