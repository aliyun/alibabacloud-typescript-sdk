// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagResponseBody extends $dara.Model {
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
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

