// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterTransitRouterMulticastGroupSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C5D5D70-0AFF-5E5C-8D8A-E92C90C8FB08
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

