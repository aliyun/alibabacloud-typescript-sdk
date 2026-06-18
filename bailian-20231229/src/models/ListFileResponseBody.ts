// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileResponseBodyDataFileList extends $dara.Model {
  /**
   * @remarks
   * The ID of the category to which the file belongs.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  /**
   * @remarks
   * The timestamp when the file was added to Alibaba Cloud Model Studio. Format: yyyy-MM-dd HH:mm:ss. Time zone: UTC+8.
   * 
   * @example
   * 2024-09-09 11:03:35
   */
  createTime?: string;
  /**
   * @remarks
   * The file ID, which is the `FileId` returned by the **AddFile** operation. You can also obtain it on the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center)<props="intl">[Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page by clicking the icon next to the file name.
   * 
   * @example
   * file_5ff599b3455a45db8c41b0054b361518_xxxxxxxx
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * product-overview.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file format type. Valid values: pdf, docx, doc, txt, md, pptx, ppt, xlsx, xls, html, png, jpg, jpeg, bmp, and gif.
   * 
   * @example
   * docx
   */
  fileType?: string;
  parseErrorMessage?: string;
  /**
   * @remarks
   * The document parser. Valid values:
   * - DASHSCOPE_DOCMIND: Alibaba Cloud intelligent document parsing.
   * 
   * @example
   * DASHSCOPE_DOCMIND
   */
  parser?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 512
   */
  sizeInBytes?: number;
  /**
   * @remarks
   * The file parsing status. Valid values:
   * - INIT: Initialization state, waiting to be scheduled.
   * - PARSING: Parsing in progress.
   * - PARSE_SUCCESS: Parsing completed.
   * - PARSE_FAILED: Parsing failed.
   * 
   * @example
   * PARSE_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The list of tags associated with the file. A document can be associated with multiple tags.
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

export class ListFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of files in the category.
   */
  fileList?: ListFileResponseBodyDataFileList[];
  /**
   * @remarks
   * Indicates whether there is a next page of category data that matches the query conditions. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  hasNext?: boolean;
  /**
   * @remarks
   * The number of entries per page for paging.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned by this call.
   * 
   * @example
   * 4jzbJk9J6lNeuXD9hP0viA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries in the returned results.
   * 
   * @example
   * 48
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      hasNext: 'HasNext',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': ListFileResponseBodyDataFileList },
      hasNext: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The data field returned by the operation.
   */
  data?: ListFileResponseBodyData;
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
   * 8F97A63B-xxxx-527F-9D6E-467B6A7E8CF1
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
      data: ListFileResponseBodyData,
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

