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
   * The ID of the file.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_xxxxxxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * XXX Product Introduction.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file type, which is the file extension. Valid values: pdf, docx, doc, txt, md, pptx, ppt, xlsx, xls, html, png, jpg, jpeg, bmp, and gif.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  /**
   * @remarks
   * The download URL of the source file.
   * 
   * @example
   * https:xxxx.com/xxx.pdf?sign=xxxx&expiredAt=xxxx
   */
  originFileDownloadUrl?: string;
  /**
   * @remarks
   * The cause of the parsing failure.
   * 
   * @example
   * Error Message
   */
  parseErrorMessage?: string;
  /**
   * @remarks
   * The download URL of the file parsing result.
   * 
   * @example
   * https://example.com/parse-result
   */
  parseResultDownloadUrl?: string;
  /**
   * @remarks
   * The type of the parser used to parse the file. Valid values:
   * - DASHSCOPE_DOCMIND: the default document parser.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 1234
   */
  sizeInBytes?: number;
  /**
   * @remarks
   * <props="china">
   * 
   * The status of a file used for a document knowledge base (type: UNSTRUCTURED). Valid values:
   * 
   * 
   * 
   * <props="intl">
   * 
   * The status of a file used for an unstructured knowledge base (type: UNSTRUCTURED). Valid values:
   * 
   * 
   * 
   * 
   * - INIT: to be parsed.
   * - IN_PARSE_QUEUE: queuing for parsing.
   * - PARSING: parsing.
   * - PARSE_SUCCESS: parsed.
   * <note>You can import a document into a knowledge base only after its status changes to PARSE_SUCCESS.</note>
   * - PARSE_FAILED: parsing failed.
   * 
   * <props="china">
   * The status of a file used for [session interaction](https://www.alibabacloud.com/help/en/model-studio/user-guide/file-interaction) in an agent application (type: SESSION_FILE). Valid values:
   * 
   * - INIT: to be parsed.
   * - IN_PARSE_QUEUE: queuing for parsing.
   * - PARSING: parsing.
   * - PARSE_SUCCESS: parsed.
   * - PARSE_FAILED: parsing failed.
   * - SAFE_CHECKING: undergoing security check.
   * - SAFE_CHECK_FAILED: security check failed.
   * - INDEX_BUILDING: building index.
   * - INDEX_BUILD_SUCCESS: index built.
   * - INDEX_BUILDING_FAILED: index building failed.
   * - INDEX_DELETED: file index deleted.
   * - FILE_IS_READY: file ready.
   * <note>You can perform Q&A only after the status changes to FILE_IS_READY.</note>
   * - FILE_EXPIRED: file expired.
   * <note>The file is valid only for the current session of the user. After the user closes the session, the file expires. The maximum validity period is 7 days. Long-term storage is not supported.</note>
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
      originFileDownloadUrl: 'OriginFileDownloadUrl',
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
      originFileDownloadUrl: 'string',
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
   * The error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The business data field.
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
   * The ID of the request.
   * 
   * @example
   * 17204B98-xxxx-4F9A-8464-2446A84821CA
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned.
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

