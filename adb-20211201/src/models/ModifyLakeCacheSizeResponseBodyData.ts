// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLakeCacheSizeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The size of the lake cache space. Unit: GB.
   * 
   * @example
   * 100
   */
  capacity?: number;
  /**
   * @remarks
   * The size of the data that occupies the lake cache space. Unit: GB.
   * 
   * @example
   * 100
   */
  dataSize?: number;
  /**
   * @remarks
   * The clusters that share the lake cache space.
   */
  instances?: string[];
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      dataSize: 'DataSize',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      dataSize: 'number',
      instances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

