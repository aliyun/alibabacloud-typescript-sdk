// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProhibitedTagsResponseBody extends $dara.Model {
  /**
   * @example
   * A900F300-AF09-5A39-954F-50B8CF733FD6
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

