// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateFuncSwitchRecordResponseBodyData } from "./UpdateFuncSwitchRecordResponseBodyData";


export class UpdateFuncSwitchRecordResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UpdateFuncSwitchRecordResponseBodyData;
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateFuncSwitchRecordResponseBodyData,
      message: 'string',
      requestId: 'string',
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

