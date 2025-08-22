// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModuleAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * CA05185E-6B90-5941-98D4-7212688AECC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

