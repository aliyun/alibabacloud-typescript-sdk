// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTaskForDistributeImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the image copy task.
   * 
   * @example
   * tid-06xnr5lyp77e7****
   */
  data?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 419F31B9-1FDF-5644-ABA3-D00026FA****
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

