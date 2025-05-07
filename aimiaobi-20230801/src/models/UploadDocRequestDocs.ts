// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocRequestDocs extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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

