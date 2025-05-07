// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadBookRequestDocs extends $dara.Model {
  docName?: string;
  /**
   * @example
   * http://xxx/ccc.pdf
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      docName: 'DocName',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

