// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPptArtifactResponseBodyDataFileAttr extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * xxx.pptx
   */
  fileName?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 600
   */
  height?: number;
  /**
   * @remarks
   * The temporary access URL for the file. The URL expires in one hour.
   * 
   * @example
   * http://www.example.com/xxx.pptx
   */
  tmpUrl?: string;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 800
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

export class GetPptArtifactResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was last updated.
   * 
   * @example
   * 2024-11-25 11:40:50
   */
  createTime?: string;
  /**
   * @remarks
   * The file properties.
   */
  fileAttr?: GetPptArtifactResponseBodyDataFileAttr;
  /**
   * @remarks
   * The storage path of the file in the backend.
   * 
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  /**
   * @remarks
   * The unique ID of the artifact.
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
   * 内容标题
   */
  title?: string;
  /**
   * @remarks
   * The time when the artifact was last updated.
   * 
   * @example
   * 2024-11-25 11:40:50
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
      fileAttr: GetPptArtifactResponseBodyDataFileAttr,
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

export class GetPptArtifactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * The task response object.
   */
  data?: GetPptArtifactResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误消息
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxxxx
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
      data: GetPptArtifactResponseBodyData,
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

