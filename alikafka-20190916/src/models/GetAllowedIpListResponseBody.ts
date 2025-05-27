// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAllowedIpListResponseBodyAllowedList } from "./GetAllowedIpListResponseBodyAllowedList";


export class GetAllowedIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   */
  allowedList?: GetAllowedIpListResponseBodyAllowedList;
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A421CCD7-5BC5-4B32-8DD8-64668A8FCB56
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowedList: 'AllowedList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedList: GetAllowedIpListResponseBodyAllowedList,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.allowedList && typeof (this.allowedList as any).validate === 'function') {
      (this.allowedList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

