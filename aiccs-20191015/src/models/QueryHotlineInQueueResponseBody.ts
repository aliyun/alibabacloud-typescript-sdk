// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotlineInQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The hotline agent data.
   * 
   * @example
   * {"n_online_now":10,"n_idle_now":3,"n_resttype_now":3,"n_acw_now":1}
   */
  data?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

