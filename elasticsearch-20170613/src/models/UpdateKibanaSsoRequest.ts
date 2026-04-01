// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKibanaSsoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  enable?: string;
  /**
   * @remarks
   * PUBLIC, PRIVATE
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLIC, PRIVATE
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

