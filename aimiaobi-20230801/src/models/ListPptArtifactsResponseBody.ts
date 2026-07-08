// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPptArtifactsResponseBodyDataFileAttr extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 数字时代的营销策划与文案创作
   */
  fileName?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 500
   */
  height?: number;
  /**
   * @remarks
   * The preview image of the work file.
   * 
   * @example
   * http://www.example.com/xxx.jpg
   */
  tmpUrl?: string;
  /**
   * @remarks
   * The width of the video.
   * 
   * @example
   * 100
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      height: 'Height',
      tmpUrl: 'TmpUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      height: 'number',
      tmpUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPptArtifactsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @remarks
   * The properties of the work file.
   */
  fileAttr?: ListPptArtifactsResponseBodyDataFileAttr;
  /**
   * @remarks
   * The preview image of the work file.
   * 
   * @example
   * http://www.example.com/xxx.jpg
   */
  fileKey?: string;
  /**
   * @remarks
   * The unique ID of the document.
   * 
   * @example
   * 10
   */
  id?: number;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 作品标题
   */
  title?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-04-14 19:59:53
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileAttr: ListPptArtifactsResponseBodyDataFileAttr,
      fileKey: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.fileAttr && typeof (this.fileAttr as any).validate === 'function') {
      (this.fileAttr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPptArtifactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Indicates whether the deletion succeeded.
   */
  data?: ListPptArtifactsResponseBodyData[];
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
   * The number of entries returned in this response.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries per page. The default is 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success. \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListPptArtifactsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

