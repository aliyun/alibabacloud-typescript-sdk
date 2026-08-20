// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteForwardStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5A232DC6-0A2E-5754-B9E6-C9A8E9EF784A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

