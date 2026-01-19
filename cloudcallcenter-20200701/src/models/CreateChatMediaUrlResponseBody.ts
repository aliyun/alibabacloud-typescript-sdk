// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatMediaUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3967da60270271ef86bcf6f7d6496302
   */
  mediaId?: string;
  /**
   * @example
   * http://img-fm1100.oss-cn-shanghai.aliyuncs.com/imageAli/2024/05/26/17166895031641.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatMediaUrlResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateChatMediaUrlResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * You are not authorized to perform this action. SkillGroup:Edit privileges are required.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * FCEFE806-E67C-577E-865B-4ED398F2F648
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateChatMediaUrlResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

