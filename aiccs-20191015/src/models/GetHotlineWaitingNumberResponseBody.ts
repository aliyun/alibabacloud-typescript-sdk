// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineWaitingNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error encoding
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Queue length of hotline members
   * 
   * @example
   * 2
   */
  data?: number;
  /**
   * @remarks
   * Fault description
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * Request ID, used to trail the cause of an error
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the API call succeeded
   * 
   * @example
   * true
   */
  success?: string;
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
      data: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

