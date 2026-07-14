// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * File metadata. You can use this to filter results during retrieval.
   * 
   * @example
   * {\\"cateogry\\": \\"报告\\"}
   */
  data?: string;
  /**
   * @remarks
   * The full file name, including the extension. Supported formats are PDF, DOC, DOCX, Markdown, PPT, and PPTX. File size must not exceed 100 MB. PDF, DOC, DOCX, PPT, and PPTX files must not exceed 500 pages.
   * 
   * This parameter is required.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The OSS URL of the file. If the file is not publicly readable, include a signature in the URL.
   * 
   * If you use the SDK to upload files, upload the file directly. You do not need to provide an OSS URL. For more information, see the SDK documentation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://oss-xxx.hangzhou.com/test.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The document library ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sjdhbcsj
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      fileName: 'string',
      fileUrl: 'string',
      libraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

