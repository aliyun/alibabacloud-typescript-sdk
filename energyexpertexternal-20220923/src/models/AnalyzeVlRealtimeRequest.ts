// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnalyzeVlRealtimeRequest extends $dara.Model {
  /**
   * @remarks
   * 文件名需带文件类型后缀
   * 
   * @example
   * test.png
   */
  fileName?: string;
  /**
   * @remarks
   * Valid values: fileUrl and fileUrlObject.
   * 
   * *   fileUrl: used as a document URL. A single document with not more than 1,000 pages and whose size does not exceed 100 MB is supported.
   * *   fileUrlObject: used when the operation is called in local file upload mode. A single document with not more than 1,000 pages and whose size does not exceed 100 MB is supported.
   * 
   * > The relationship between file extraction methods and supported document types
   * > - Long text RAG: Supports pdf, doc/docx, xlsx, csv, txt, up to 1000 pages
   * > - Image processing: Supports pdf, jpg, jpeg, png, bmp, jpe, tif, tiff, webp, heic
   * > - Long text understanding: Supports doc/docx, xlsx, pdf, csv, txt
   * 
   * @example
   * fileUrl: https://example.com/example.pdf fileUrlObject: FileInputStream generated for a local file
   */
  fileUrl?: string;
  /**
   * @remarks
   * The language, which can be transferred. Valid values:
   * 
   * *   zh-CN (default)
   * *   en-US
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The unique ID of an extraction template, which is used to specify the content to be extracted from a document. You must log on to the Template Management page to configure the template and then obtain the corresponding template ID.
   * 
   * @example
   * 572d24k0c95a
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      fileUrl: 'fileUrl',
      language: 'language',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileUrl: 'string',
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

