// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHbaseHaSlbResponseBody extends $dara.Model {
  /**
   * @example
   * C9D568D9-A59C-4AF2-8FBB-F086A841D58E
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

