// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataAgentSubAccountInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1765960516
   */
  createDate?: number;
  /**
   * @example
   * 167*****166
   */
  mainAccountId?: string;
  /**
   * @example
   * 1765962516
   */
  updateDate?: number;
  /**
   * @example
   * 20282*****7591
   */
  userId?: string;
  /**
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
  data?: GetDataAgentSubAccountInfoResponseBodyData;
  /**
   * @example
   * DMS-DA-40114
   */
  errorCode?: string;
  /**
   * @example
   * Specified parameter is not valid.
   */
  errorMessage?: string;
  /**
   * @example
   * 67E910F2-***-695C
   */
  requestId?: string;
  /**
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

