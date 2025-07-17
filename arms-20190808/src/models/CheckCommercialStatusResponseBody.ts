// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCommercialStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   * 
   * @example
   * True
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A474FF8-7861-4D00-81B5-5BC3DA4E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

