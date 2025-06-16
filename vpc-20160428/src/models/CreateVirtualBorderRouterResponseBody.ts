// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualBorderRouterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * @example
   * vbr-bp1jcg5cmxjbl9xgc****
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

