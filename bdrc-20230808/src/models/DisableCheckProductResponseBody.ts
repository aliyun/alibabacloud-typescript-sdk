// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableCheckProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request
   * 
   * @example
   * 89E3CBB7-16F3-52AE-BD32-31A43A2A807F
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

