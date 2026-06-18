// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the file belongs.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The timestamp when the file was added to Model Studio. Format: yyyy-MM-dd HH:mm:ss. Time zone: UTC+8.
   * 
   * @example
   * 2024-09-09 12:45:43
   */
  createTime?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_xxxxxxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * XXX产品介绍.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file type (extension). Valid values: pdf, docx, doc, txt, md, pptx, ppt, xlsx, xls, html, png, jpg, jpeg, bmp, and gif.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  parseErrorMessage?: string;
  parseResultDownloadUrl?: string;
  /**
   * @remarks
   * The parser type used to parse the file. Valid values:
   * - DASHSCOPE_DOCMIND: the default document parser.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 1234
   */
  sizeInBytes?: number;
  /**
   * @remarks
   * <props="china">
   * 
   * For files used in document-based knowledge bases (type: UNSTRUCTURED), valid values:
   * 
   * 
   * 
   * <props="intl">
   * 
   * For files used in unstructured knowledge bases (type: UNSTRUCTURED), valid values:
   * 
   * 
   * 
   * 
   * - INIT: pending parsing.
   * - IN_PARSE_QUEUE: queued for parsing.
   * - PARSING: being parsed.
   * - PARSE_SUCCESS: parsing completed.
   * <note>The document can be imported into a knowledge base only after the status changes to PARSE_SUCCESS.</note>
   * - PARSE_FAILED: parsing failed.
   * 
   * <props="china">
   * For files used in agent application [session interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction) (type: SESSION_FILE), valid values:
   * 
   * - INIT: pending parsing.
   * - IN_PARSE_QUEUE: queued for parsing.
   * - PARSING: being parsed.
   * - PARSE_SUCCESS: parsing completed.
   * - PARSE_FAILED: parsing failed.
   * - SAFE_CHECKING: security check in progress.
   * - SAFE_CHECK_FAILED: security check failed.
   * - INDEX_BUILDING: index being built.
   * - INDEX_BUILD_SUCCESS: index built.
   * - INDEX_BUILDING_FAILED: index building failed.
   * - INDEX_DELETED: file index deleted.
   * - FILE_IS_READY: file is ready.
   * <note>Q&A can proceed only after the status changes to FILE_IS_READY.</note>
   * - FILE_EXPIRED: file expired.
   * <note>The file is valid only for the current user session. After the user closes the session, the file expires (maximum validity period: 7 days). Long-term retention is not supported.</note>
   * .
   * 
   * @example
   * PARSE_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The list of tags associated with the file. A file can be associated with multiple tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      parseErrorMessage: 'ParseErrorMessage',
      parseResultDownloadUrl: 'ParseResultDownloadUrl',
      parser: 'Parser',
      sizeInBytes: 'SizeInBytes',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      createTime: 'string',
      fileId: 'string',
      fileName: 'string',
      fileType: 'string',
      parseErrorMessage: 'string',
      parseResultDownloadUrl: 'string',
      parser: 'string',
      sizeInBytes: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data field of the operation.
   */
  data?: DescribeFileResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Requests throttling triggered.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
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
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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
      data: DescribeFileResponseBodyData,
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

