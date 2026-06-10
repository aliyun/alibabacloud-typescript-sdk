// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionSessionListResponseBodyDataSaveAnnotationMissionSessionListRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the script for the approval requests
   * 
   * @example
   * []
   */
  annotationMissionSessionListJsonString?: string;
  static names(): { [key: string]: string } {
    return {
      annotationMissionSessionListJsonString: 'AnnotationMissionSessionListJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionSessionListJsonString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAnnotationMissionSessionListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message returned for the operation.
   * 
   * @example
   * 执行失败：查找元素或操作超时,outTaskId:trademark_regnew_public_cn-zz4310rp1lb,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821
   */
  message?: string;
  /**
   * @remarks
   * The list of messages.
   */
  messageList?: string[];
  /**
   * @remarks
   * The request result.
   */
  saveAnnotationMissionSessionListRequest?: SaveAnnotationMissionSessionListResponseBodyDataSaveAnnotationMissionSessionListRequest;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      messageList: 'MessageList',
      saveAnnotationMissionSessionListRequest: 'SaveAnnotationMissionSessionListRequest',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      messageList: { 'type': 'array', 'itemType': 'string' },
      saveAnnotationMissionSessionListRequest: SaveAnnotationMissionSessionListResponseBodyDataSaveAnnotationMissionSessionListRequest,
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    if(this.saveAnnotationMissionSessionListRequest && typeof (this.saveAnnotationMissionSessionListRequest as any).validate === 'function') {
      (this.saveAnnotationMissionSessionListRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAnnotationMissionSessionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: SaveAnnotationMissionSessionListResponseBodyData;
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
   * The returned message. If the request is successful, success is returned. If the request fails, an error code is returned.
   * 
   * @example
   * 执行失败：查找元素或操作超时,outTaskId:trademark_regnew_public_cn-zz4310rp1lb,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 76E93048-F90F-57B7-BD46-6097611A706D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. A value of true indicates success. A value of false indicates failure.
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
      data: SaveAnnotationMissionSessionListResponseBodyData,
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

