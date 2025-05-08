// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL that points to the exported image.
   * 
   * @example
   * http://oss.url
   */
  exportedImageURL?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 43A426AD-3F2E-5DD9-9C08-D4DBDCA48D85
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportedImageURL: 'ExportedImageURL',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportedImageURL: 'string',
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

