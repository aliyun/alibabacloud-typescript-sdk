// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAnnotationMissionSessionListResponseBodyDataSaveAnnotationMissionSessionListRequest extends $dara.Model {
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
  message?: string;
  messageList?: string[];
  saveAnnotationMissionSessionListRequest?: SaveAnnotationMissionSessionListResponseBodyDataSaveAnnotationMissionSessionListRequest;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: SaveAnnotationMissionSessionListResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 76E93048-F90F-57B7-BD46-6097611A706D
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

