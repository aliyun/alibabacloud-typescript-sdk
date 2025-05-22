// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSubscriptionMetaResponseBodySubscriptionMetaList } from "./DescribeSubscriptionMetaResponseBodySubscriptionMetaList";


export class DescribeSubscriptionMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C12E7A51-09A4-5796-94BE-08B6DA******
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the subtasks.
   */
  subscriptionMetaList?: DescribeSubscriptionMetaResponseBodySubscriptionMetaList[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      subscriptionMetaList: 'SubscriptionMetaList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      subscriptionMetaList: { 'type': 'array', 'itemType': DescribeSubscriptionMetaResponseBodySubscriptionMetaList },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionMetaList)) {
      $dara.Model.validateArray(this.subscriptionMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

