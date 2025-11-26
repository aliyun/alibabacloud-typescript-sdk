// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OmniRealtimeConversationEUResponseBodyData extends $dara.Model {
  audioResult?: string;
  static names(): { [key: string]: string } {
    return {
      audioResult: 'audioResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OmniRealtimeConversationEUResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: OmniRealtimeConversationEUResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 89946BAA-E4E1-5114-8A5E-A542FEDC9B16
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: OmniRealtimeConversationEUResponseBodyData,
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

