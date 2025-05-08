// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyFileUploadLeaseRequest extends $dara.Model {
  categoryType?: string;
  /**
   * @remarks
   * The name of the uploaded document, including the extension. Supported formats: pdf, doc, docx, md, txt, ppt, and pptx. The document name must be 4 to 128 characters in length.
   * 
   * This parameter is required.
   */
  fileName?: string;
  /**
   * @remarks
   * The MD5 value of the uploaded document. This parameter is verified by the server (not in the current version).
   * 
   * This parameter is required.
   * 
   * @example
   * 19657c391f6c70bcea63c154d8606bb3
   */
  md5?: string;
  /**
   * @remarks
   * The size of the uploaded document, in bytes. This parameter is verified by the server (not in the current version). Valid values: 1 to 100000000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  sizeInBytes?: string;
  useInternalEndpoint?: boolean;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      fileName: 'FileName',
      md5: 'Md5',
      sizeInBytes: 'SizeInBytes',
      useInternalEndpoint: 'UseInternalEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      fileName: 'string',
      md5: 'string',
      sizeInBytes: 'string',
      useInternalEndpoint: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

