// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexDocumentsResponseBodyDataDocuments extends $dara.Model {
  /**
   * @remarks
   * The error status code for the file import.
   * 
   * @example
   * 110002
   */
  code?: string;
  /**
   * @remarks
   * The file format type. Valid values: pdf, docx, doc, txt, md, pptx, ppt, png, jpg, jpeg, bmp, gif, and EXCEL.
   * 
   * @example
   * pdf
   */
  documentType?: string;
  /**
   * @remarks
   * The time when the file was imported to the knowledge base, in UNIX timestamp format.
   * 
   * @example
   * 1744856423000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * doc_c134aa2073204a5d936d870bf960f56axxxxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The error message for the file import.
   * 
   * @example
   * check fileUrlKey[file_path] / fileNameKey[null] / fileExtensionKey[file_extension] is invalid
   */
  message?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * product-overview
   */
  name?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 996765
   */
  size?: number;
  /**
   * @remarks
   * <props="china">
   * 
   * For document search or audio/video search knowledge bases, this parameter specifies the category ID, which is the `CategoryId` returned by the **AddCategory** operation. You can also obtain the category ID by clicking the ID icon next to the category name on the Files tab of the [Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) page.
   * 
   * 
   * For data query or image Q&A knowledge bases, this parameter specifies the data table ID. You can obtain the data table ID by clicking the ID icon next to the data table name on the Tables tab of the [Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) page.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * For document search knowledge bases, this parameter specifies the category ID, which is the `CategoryId` returned by the **AddCategory** operation. You can also obtain the category ID by clicking the ID icon next to the category name on the Files tab of the [Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) page.
   * 
   * 
   * For data query or image Q&A knowledge bases, this parameter specifies the data table ID. You can obtain the data table ID by clicking the ID icon next to the data table name on the Tables tab of the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page.
   * 
   * .
   * 
   * @example
   * cate_21a407a3372c4ba7aedc649709143f0cxxxxxxxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The file import status. Valid values:
   * - INSERT_ERROR: The file failed to be imported.
   * - RUNNING: The file is being imported.
   * - DELETED: The file has been deleted.
   * - FINISH: The file was imported.
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

export class ListIndexDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of files in the knowledge base, sorted by file import time in descending order (consistent with the console).
   */
  documents?: ListIndexDocumentsResponseBodyDataDocuments[];
  /**
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * pno97txxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The returned number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 2437
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      documents: 'Documents',
      indexId: 'IndexId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documents: { 'type': 'array', 'itemType': ListIndexDocumentsResponseBodyDataDocuments },
      indexId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.documents)) {
      $dara.Model.validateArray(this.documents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The data field returned by the operation.
   */
  data?: ListIndexDocumentsResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35A267BF-xxxx-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: The operation was successful.
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIndexDocumentsResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

