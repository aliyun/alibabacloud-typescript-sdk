// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderForRdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the purchased RDS instance.
   * 
   * @example
   * [rm-***********]
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9819BC51-D33D-4EB1-B80F-A89A20******
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

