// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCheckProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 8724BC18-904D-5A0D-BFF4-F0554F0037E7
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

