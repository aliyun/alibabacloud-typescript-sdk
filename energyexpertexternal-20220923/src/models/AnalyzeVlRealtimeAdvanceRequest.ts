// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class AnalyzeVlRealtimeAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Choose one of fileUrl or fileUrlObject:
   * 
   * - fileUrl: Use in the form of a document URL, for a single document (supports up to 1000 pages and 100MB)
   * 
   * - fileUrlObject: Use when calling the interface with local file upload, for a single document (supports up to 1000 pages and 100 MB)
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
   * Language, parameters that can be passed
   * - zh-CN: Chinese (default)
   * - en-US: English
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * A unique parsing template ID used to specify the key-value pairs to be extracted from the document. You need to log in to the template management page, configure the template, and then get the corresponding template ID.
   * 
   * @example
   * 572d24k0c95a
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrlObject: 'fileUrl',
      language: 'language',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrlObject: 'Readable',
      language: 'string',
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

