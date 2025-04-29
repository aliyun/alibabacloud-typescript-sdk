// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportOASResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded data of the exported Swagger file. You can obtain the file by using Base64 decoding.
   * 
   * @example
   * UEsDBBQACAAIAABc8FgAAAAAAAAAAAAAAAA...
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

