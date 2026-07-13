// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCheckResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the request.
   * 
   * @example
   * E583A0FF-803C-51C4-9AC9-E029471ACD6A
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

