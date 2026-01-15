// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepublishModelRequest extends $dara.Model {
  /**
   * @example
   * 456
   */
  customerModuleId?: number;
  static names(): { [key: string]: string } {
    return {
      customerModuleId: 'CustomerModuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerModuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

