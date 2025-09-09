// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachHostAccountsToHostShareKeyResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code returned. If **OK** is returned, the association was successful. If another error code is returned, the association failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the host account.
   * 
   * @example
   * 1201
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The ID of the shared key.
   * 
   * @example
   * 10267
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The host account does not exist
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      hostShareKeyId: 'HostShareKeyId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      hostShareKeyId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostAccountsToHostShareKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: AttachHostAccountsToHostShareKeyResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostAccountsToHostShareKeyResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

