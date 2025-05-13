// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUmodelDataResponseBody extends $dara.Model {
  /**
   * @example
   * 111111-222-333-1111-33333
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

