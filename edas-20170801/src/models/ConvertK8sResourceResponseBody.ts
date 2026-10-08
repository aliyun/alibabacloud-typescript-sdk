// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertK8sResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * convert success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BA938591-*********-9690-BFD3F4DD7A93
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

