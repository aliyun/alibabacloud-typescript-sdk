// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BroadcastVideo } from "./BroadcastVideo";


export class CreateBroadcastVideoFromTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * {"sessionId": "20250311-41523E3C-1D27-5844-8EEF-194E4714096B", "mainAccountId": 1234567, "createdAt": 1755680457}
   */
  data?: BroadcastVideo;
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
   * @example
   * 0EC3BA89-13F5-5766-A0BA-85096092A032
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: BroadcastVideo,
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

