// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmarttagTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 5210DBB0-E327-4D45-ADBC-0B83C8796E26
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

