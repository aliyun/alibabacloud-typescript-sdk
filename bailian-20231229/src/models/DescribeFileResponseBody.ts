// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the document belongs.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  /**
   * @remarks
   * The timestamp when the document was uploaded to Model Studio. Format: yyyy-MM-dd HH:mm:ss. Time zone: UTC + 8.
   * 
   * @example
   * 2024-05-26 12:45:43
   */
  createTime?: string;
  /**
   * @remarks
   * The primary key ID of the document.
   * 
   * @example
   * file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * test.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file type of the document. The value is an extension. Valid values: pdf, docx, doc, txt, md, pptx, and ppt.
   * 
   * @example
   * pdf
   */
  fileType?: string;
  parseResultDownloadUrl?: string;
  /**
   * @remarks
   * The parser that is used to parse the document. Valid value:
   * 
   * *   DASHSCOPE_DOCMIND: The default document parser.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The size of the document. Unit: bytes.
   * 
   * @example
   * 1234
   */
  sizeInBytes?: number;
  /**
   * @remarks
   * The status of the document. Valid values:
   * 
   * *   INIT: pending parsing.
   * *   PARSING
   * *   PARSE_SUCCESS
   * *   PARSE_FAILED
   * 
   * @example
   * PARSE_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The tags that are associated with the document. A document can be associated with multiple tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      createTime: 'CreateTime',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
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
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data fields.
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indications whether the API call is successful. Valid values:
   * 
   * *   true
   * *   false
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

