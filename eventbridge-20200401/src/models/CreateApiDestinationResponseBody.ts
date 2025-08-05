// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiDestinationResponseBodyDate extends $dara.Model {
  /**
   * @remarks
   * The name of the API destination.
   * 
   * @example
   * ApiDestinationName
   */
  apiDestinationName?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiDestinationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. The value Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned if the API destination is created.
   */
  date?: CreateApiDestinationResponseBodyDate;
  /**
   * @remarks
   * The returned message.
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
   * 5DAF96FB-A4B6-548C-B999-0BFDCB2261B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      date: 'Date',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      date: CreateApiDestinationResponseBodyDate,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.date && typeof (this.date as any).validate === 'function') {
      (this.date as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

