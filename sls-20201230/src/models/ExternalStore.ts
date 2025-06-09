// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalStore extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds_store
   */
  externalStoreName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  parameter?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rds-vpc
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      externalStoreName: 'externalStoreName',
      parameter: 'parameter',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalStoreName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      storeType: 'string',
    };
  }

  validate() {
    if(this.parameter) {
      $dara.Model.validateMap(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

