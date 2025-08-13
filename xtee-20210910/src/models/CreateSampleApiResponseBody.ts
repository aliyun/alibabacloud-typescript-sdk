// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * ConsolePocQueryServiceImpl.queryServiceCodeName.arg0.tab tab Type error
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

