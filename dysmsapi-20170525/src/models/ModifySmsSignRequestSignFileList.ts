// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmsSignRequestSignFileList extends $dara.Model {
  /**
   * @remarks
   * The base64-encoded string of the signed files. The size of the image cannot exceed 2 MB.
   * 
   * In some scenarios, documents are required to prove your identity. For more information, see [Signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * This parameter is required.
   * 
   * @example
   * R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uLiwAA
   */
  fileContents?: string;
  /**
   * @remarks
   * The format of the documents. You can upload multiple images. JPG, PNG, GIF, and JPEG are supported.
   * 
   * In some scenarios, documents are required to prove your identity. For more information, see [Signature specifications](https://help.aliyun.com/document_detail/108076.html).
   * 
   * > If the signature is used for other purposes or the signature source is an enterprise or public institution, you must upload some documents and an authorization letter. For more information, see [Documents](https://help.aliyun.com/document_detail/108076.html) and [Letter of authorization](https://help.aliyun.com/document_detail/56741.html).
   * 
   * This parameter is required.
   * 
   * @example
   * jpg
   */
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

