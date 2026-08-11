// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetEncryptionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7FA0FF4A-ABD4-54F6-BEAC-B4273EBA10A2
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

