// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMemoryNodeResponseBody extends $dara.Model {
  /**
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
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

