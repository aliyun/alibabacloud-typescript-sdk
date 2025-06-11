// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BeeBotAssociateResponseBodyData } from "./BeeBotAssociateResponseBodyData";


export class BeeBotAssociateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denied for detailed information.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * If OK is returned, the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: BeeBotAssociateResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: BeeBotAssociateResponseBodyData,
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

