// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOssScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * >  You can call the [ListOssScanConfig](~~ListOssScanConfig~~) operation to query configuration IDs.
   * 
   * @example
   * 1589
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

