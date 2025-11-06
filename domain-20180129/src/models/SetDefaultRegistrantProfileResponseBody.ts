// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultRegistrantProfileResponseBody extends $dara.Model {
  /**
   * @example
   * 4D73432C-7600-4779-ACBB-C3B5CA145D32
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

