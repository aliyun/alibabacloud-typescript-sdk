// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRoleAclResponseBodyData } from "./GetRoleAclResponseBodyData";


export class GetRoleAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRoleAclResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * error message
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dc0916696898838762018e9564
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRoleAclResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
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

