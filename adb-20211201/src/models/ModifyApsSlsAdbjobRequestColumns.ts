// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsSlsADBJobRequestColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the mapping.
   * 
   * @example
   * map_name
   */
  mapName?: string;
  /**
   * @remarks
   * The type of the mapping.
   * 
   * @example
   * bigint
   */
  mapType?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * test_name
   */
  name?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mapName: 'MapName',
      mapType: 'MapType',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mapName: 'string',
      mapType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

