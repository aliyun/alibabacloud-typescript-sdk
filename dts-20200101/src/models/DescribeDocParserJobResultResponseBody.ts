// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocParserJobResultResponseBodyContentList extends $dara.Model {
  /**
   * @remarks
   * The text content of the corresponding page, which is the complete Markdown text after parsing.
   * 
   * @example
   * * Demo * ** Demo title **
   */
  content?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      pageNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocParserJobResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The complete text parsing content.
   * > If the task type is content, ContentList splits the original document by page. Each page has a separate Markdown text entry.
   */
  contentList?: DescribeDocParserJobResultResponseBodyContentList[];
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message used to replace the **%s** variable in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * The request processing has failed due to some unknown error.
   */
  errMessage?: string;
  /**
   * @remarks
   * The OSS download URL of the file.
   * 
   * > If the task type is zip, this field returns the download URL of the zip package. The URL is valid for 30 minutes.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/806a_209584525031252870_078f1180f27b4c069c0f271758aa****
   */
  fileUrl?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The public OSS download URL of the file.
   * 
   * @example
   * https://oss-cn-hangzhou.aliyuncs.com/806a_209584525031252870_078f1180f27b4c069c0f271758aa****
   */
  outerFileUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C166D79D-436B-45F0-B5A5-25E1959F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      contentList: 'ContentList',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      fileUrl: 'FileUrl',
      httpStatusCode: 'HttpStatusCode',
      outerFileUrl: 'OuterFileUrl',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentList: { 'type': 'array', 'itemType': DescribeDocParserJobResultResponseBodyContentList },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      fileUrl: 'string',
      httpStatusCode: 'number',
      outerFileUrl: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.contentList)) {
      $dara.Model.validateArray(this.contentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

