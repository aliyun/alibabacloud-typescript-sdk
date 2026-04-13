// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDetectConfigResponseBody extends $dara.Model {
  /**
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @example
   * String
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectConfigId: 'detectConfigId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectConfigId: 'string',
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

