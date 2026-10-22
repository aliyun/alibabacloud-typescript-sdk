// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the label.
   * 
   * @example
   * 7391272
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxxXxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

