// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotlineSessionQueryResponseBodyData } from "./HotlineSessionQueryResponseBodyData";


export class HotlineSessionQueryResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: HotlineSessionQueryResponseBodyData;
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE339D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HotlineSessionQueryResponseBodyData,
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

