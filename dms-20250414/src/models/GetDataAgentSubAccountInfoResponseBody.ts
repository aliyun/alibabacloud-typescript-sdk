// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentSubAccountInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the user was created in RAM. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765960516
   */
  createDate?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the user belongs.
   * 
   * @example
   * 167*****166
   */
  mainAccountId?: string;
  /**
   * @remarks
   * The time when the user information was last updated. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1765962516
   */
  updateDate?: number;
  /**
   * @remarks
   * The UID of the queried RAM user.
   * 
   * @example
   * 20282*****7591
   */
  userId?: string;
  /**
   * @remarks
   * The name of the queried RAM user.
   * 
   * @example
   * yunqitest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createDate: 'CreateDate',
      mainAccountId: 'MainAccountId',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDate: 'number',
      mainAccountId: 'string',
      updateDate: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataAgentSubAccountInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data structure.
   */
  data?: GetDataAgentSubAccountInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67E910F2-***-695C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataAgentSubAccountInfoResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

