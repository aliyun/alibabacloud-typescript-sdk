// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaceDbResponseBody extends $dara.Model {
  /**
   * @example
   * 818D24A6-E368-46B3-99C5-3CF36D98CCA3
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

