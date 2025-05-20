// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitDocExtractionTaskAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Document parsing type:
   * Supports rag and long text understanding types, default is rag.
   * 
   * @example
   * rag
   */
  extractType?: string;
  /**
   * @remarks
   * The filename must include the file type extension.
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
   * - fileUrl: Use by providing the document URL, for a single document (supports up to 1000 pages, 100MB in size)
   * 
   * - fileUrlObject: Use when calling the interface with local file upload, for a single document (supports up to 1000 pages, 100 MB in size)
   * 
   * > The relationship between file parsing methods and supported document types
   * > - Long text RAG: Supports pdf, doc/docx, up to 1000 pages
   * > - Image processing: Supports pdf, jpg, jpeg, png, bmp
   * > - Long text understanding: Supports pdf, doc/docx, xls/xlsx
   * 
   * @example
   * fileUrl：https://example.com/example.pdf
   * fileUrlObject：FileInputStream generated from a local file
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * - A unique knowledge base folder ID, used when you need to categorize documents and control the scope of documents for online Q&A queries.
   * - The folder ID needs to be obtained by logging into the intelligent document console.
   * 
   * @example
   * xxxxx
   */
  folderId?: string;
  /**
   * @remarks
   * A unique parsing template ID used to specify the key-value pairs to be extracted from the document. You need to log in to the template management page to configure the template and obtain the corresponding template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 572d24k0c95a
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      extractType: 'extractType',
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      folderId: 'folderId',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractType: 'string',
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

