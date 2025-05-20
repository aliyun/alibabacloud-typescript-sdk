// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class SubmitDocumentAnalyzeJobAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The default extraction method is "doc", with the following optional values:
   * 
   * - vl: Image processing
   * - doc: Long text RAG (Retrieval-Augmented Generation)
   * - docUnderstanding: Long text comprehension
   * - recommender: Recommendation type
   * 
   * @example
   * doc
   */
  analysisType?: string;
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
   * Choose one between fileUrl and fileUrlObject:
   * 
   * - fileUrl: Use the document URL method for a single document (supports documents with up to 1000 pages and within 100MB).
   * 
   * - fileUrlObject: Use when calling the API via local file upload, for a single document (supports documents with up to 1000 pages and 
   * within 100MB).
   * 
   * > Relationship between file parsing methods and supported document types. 
   * >- Long Text RAG: Supports pdf, doc/docx, and up to 1000 pages
   * >- Image Processing: Supports pdf, jpg, jpeg, png, bmp
   * >- Long Text Understanding: Supports pdf, doc/docx, xls/xlsx
   * 
   * @example
   * https://example.com/example.pdf
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * Unique knowledge base folder ID, used for categorizing documents and controlling the scope of online Q&A queries. If empty, the document will be uploaded to the tenant\\"s root directory.
   * 
   * @example
   * folderCode
   */
  folderId?: string;
  /**
   * @remarks
   * The unique extraction template ID is used to specify the key-value pairs to be extracted from the document. You need to log in to the template management page to configure the template and obtain the corresponding template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * templateCode
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisType: 'analysisType',
      fileName: 'fileName',
      fileUrlObject: 'fileUrl',
      folderId: 'folderId',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisType: 'string',
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

