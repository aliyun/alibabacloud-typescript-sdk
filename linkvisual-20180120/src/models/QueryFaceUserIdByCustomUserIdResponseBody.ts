// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceUserIdByCustomUserIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user ID in the caller system.
   * 
   * @example
   * TestCustomUserId
   */
  customUserId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * TestName
   */
  name?: string;
  /**
   * @remarks
   * The user parameters.
   * 
   * @example
   * {"age":28, "sex":"male"}
   */
  params?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * TestUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      name: 'string',
      params: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceUserIdByCustomUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The return value of the API operation.
   */
  data?: QueryFaceUserIdByCustomUserIdResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A13279A-5640-45E7-87AA-83750541AD0E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryFaceUserIdByCustomUserIdResponseBodyData,
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

