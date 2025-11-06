// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppViewStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 94D9A316-9750-5928-B18C-59DF182F6BF7
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

