// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecognitionLibResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the recognition library created.
   * 
   * @example
   * *************24b47865c6**************
   */
  libId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
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

