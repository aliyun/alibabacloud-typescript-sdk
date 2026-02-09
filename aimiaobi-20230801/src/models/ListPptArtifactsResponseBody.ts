// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPptArtifactsResponseBodyDataFileAttr extends $dara.Model {
  fileName?: string;
  /**
   * @example
   * 500
   */
  height?: number;
  /**
   * @example
   * http://www.example.com/xxx.jpg
   */
  tmpUrl?: string;
  /**
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
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  fileAttr?: ListPptArtifactsResponseBodyDataFileAttr;
  /**
   * @example
   * http://www.example.com/xxx.jpg
   */
  fileKey?: string;
  /**
   * @example
   * 10
   */
  id?: number;
  title?: string;
  /**
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
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListPptArtifactsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * cEoBWREAXdxaOyjq/cqAbg==
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

