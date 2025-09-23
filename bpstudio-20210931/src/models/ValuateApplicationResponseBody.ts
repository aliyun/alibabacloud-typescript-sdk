// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValuateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code of the query task.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123
   */
  data?: number;
  /**
   * @remarks
   * Idempotent notation
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

