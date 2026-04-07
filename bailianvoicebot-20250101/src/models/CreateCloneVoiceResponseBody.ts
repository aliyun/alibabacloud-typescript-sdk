// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloneVoiceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 8ee1160a-6999-478f-8df6-f33ef21f27d5
   */
  cloneVoiceId?: string;
  /**
   * @example
   * cosyvoice-v3-plus-voicebot2-3666e4bbb2b94832ac4f4107b5804c34
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      cloneVoiceId: 'CloneVoiceId',
      voice: 'Voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoiceId: 'string',
      voice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCloneVoiceResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateCloneVoiceResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance llm-xdne77rxe14ziszr
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * CF6D3484-19A1-5C77-863B-AC8B5754D37C
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
      data: CreateCloneVoiceResponseBodyData,
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

