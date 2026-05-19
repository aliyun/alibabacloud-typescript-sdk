// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptInfoResponseBodyData extends $dara.Model {
  exportFileLink?: string[];
  /**
   * @example
   * xxx-xxx-xx
   */
  exportTaskId?: string;
  /**
   * @example
   * http://a.com/xxx.jpeg
   */
  pptArtifactCover?: string;
  /**
   * @example
   * 5423431
   */
  pptArtifactId?: string;
  /**
   * @example
   * 11231232
   */
  pptProcessId?: string;
  /**
   * @example
   * 关于班会主题的PPT
   */
  query?: string;
  /**
   * @example
   * xxx-xxx-xx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      exportFileLink: 'ExportFileLink',
      exportTaskId: 'ExportTaskId',
      pptArtifactCover: 'PptArtifactCover',
      pptArtifactId: 'PptArtifactId',
      pptProcessId: 'PptProcessId',
      query: 'Query',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportFileLink: { 'type': 'array', 'itemType': 'string' },
      exportTaskId: 'string',
      pptArtifactCover: 'string',
      pptArtifactId: 'string',
      pptProcessId: 'string',
      query: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exportFileLink)) {
      $dara.Model.validateArray(this.exportFileLink);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPptInfoResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: GetPptInfoResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxxx
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPptInfoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
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

