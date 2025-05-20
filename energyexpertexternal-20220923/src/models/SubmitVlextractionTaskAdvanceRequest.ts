// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitVLExtractionTaskAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The filename must include the file type suffix.
   * 
   * This parameter is required.
   * 
   * @example
   * example.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * Choose one of fileUrl or fileUrlObject:
   * 
   * - fileUrl: Use by providing the document URL, for a single document (supports up to 1000 pages and 100MB in size)
   * 
   * - fileUrlObject: Use when calling the interface with local file upload, for a single document (supports up to 1000 pages and 100 MB in size)
   * 
   * > The relationship between file parsing methods and supported document types
   * > - Long Text RAG: Supports pdf, doc/docx, up to 1000 pages
   * > - Image Processing: Supports pdf, jpg, jpeg, png, bmp
   * > - Long Text Understanding: Supports pdf, doc/docx, xls/xlsx
   * 
   * @example
   * fileUrl：https://example.com/example.pdf
   * fileUrlObject：本地文件生成的FileInputStream
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * - Unique knowledge base folder ID, used when you need to categorize documents and control the scope of online Q&A queries.
   * - The folder ID needs to be obtained from the intelligent document console after logging in.
   * 
   * @example
   * xxxxx
   */
  folderId?: string;
  /**
   * @remarks
   * Unique parsing template ID, used to specify the key-value pairs to be extracted from the document. You need to configure the template on the template management page and then obtain the corresponding template ID.
   * 
   * @example
   * 572d24k0c95a
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      folderId: 'folderId',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      folderId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

