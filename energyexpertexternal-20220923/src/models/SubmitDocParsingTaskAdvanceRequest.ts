// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitDocParsingTaskAdvanceRequest extends $dara.Model {
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
   * - fileUrl: Use by providing the document URL, for a single document (supports up to 1000 pages and 100MB in size)
   * 
   * - fileUrlObject: Use when calling the interface with local file upload, for a single document (supports up to 1000 pages and 100 MB in size)
   * 
   * > The relationship between file parsing methods and supported document types
   * > - Long Text RAG: Supports pdf, doc/docx, supports up to 1000 pages
   * > - Image Processing: Supports pdf, jpg, jpeg, png, bmp
   * > - Long Text Understanding: Supports pdf, doc/docx, xls/xlsx
   * 
   * @example
   * fileUrl：https://example.com/example.pdf
   * fileUrlObject：FileInputStream generated from a local file
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * - Unique knowledge base folder ID, used when categorizing documents and controlling the scope of documents for online Q&A queries.
   * - The folder ID needs to be obtained from the Intelligent Document Console after logging in.
   * 
   * @example
   * xxxxx
   */
  folderId?: string;
  /**
   * @remarks
   * Whether to parse image content within the document.
   * 
   * @example
   * false
   */
  needAnalyzeImg?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      folderId: 'folderId',
      needAnalyzeImg: 'needAnalyzeImg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrlObject: 'Readable',
      folderId: 'string',
      needAnalyzeImg: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

