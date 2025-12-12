// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartInstanceNodeListResponseBody extends $dara.Model {
  /**
   * @example
   * 36E3AB2E-E0DA-5C7B-8E29-89EE44926515
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

