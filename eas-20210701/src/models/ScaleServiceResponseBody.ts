// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A message indicating the result of the operation.
   * 
   * @example
   * Service [foo] in region [cn-shanghai] is scaling
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

