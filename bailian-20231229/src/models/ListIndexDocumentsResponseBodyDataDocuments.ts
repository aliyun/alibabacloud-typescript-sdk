// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexDocumentsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * The error status code of document import.
   * 
   * @example
   * 110002
   */
  code?: string;
  /**
   * @remarks
   * The format of the document. Valid values: pdf, docx, doc, txt, md, pptx, ppt, and EXCEL.
   * 
   * @example
   * pdf
   */
  documentType?: string;
  gmtModified?: number;
  /**
   * @remarks
   * The primary key ID of the document.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56a10024701
   */
  id?: string;
  /**
   * @remarks
   * The error message of document import.
   * 
   * @example
   * check fileUrlKey[file_path] / fileNameKey[null] / fileExtensionKey[file_extension] is invalid
   */
  message?: string;
  /**
   * @remarks
   * The name of the document.
   */
  name?: string;
  /**
   * @remarks
   * The size of the document. Unit: bytes.
   * 
   * @example
   * 996764
   */
  size?: number;
  /**
   * @remarks
   * For unstructured knowledge base, this parameter is the category ID. To view the category ID, you can click the ID icon next to the category name on the Unstructured Data tab of the [Data Management](https://bailian.console.aliyun.com/#/data-center) page.
   * 
   * For structured knowledge base, this parameter is the data table ID. To view the table ID, you can click the ID icon next to the table name on the Structured Data tab of the [Data Management](https://bailian.console.aliyun.com/#/data-center) page.
   * 
   * @example
   * cate_21a407a3372c4ba7aedc649709143f0c10021401
   */
  sourceId?: string;
  /**
   * @remarks
   * The import status of the document. Valid values:
   * 
   * *   INSERT_ERROR
   * *   RUNNING
   * *   DELETED
   * *   FINISH
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      documentType: 'DocumentType',
      gmtModified: 'GmtModified',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      size: 'Size',
      sourceId: 'SourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      documentType: 'string',
      gmtModified: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      size: 'number',
      sourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

