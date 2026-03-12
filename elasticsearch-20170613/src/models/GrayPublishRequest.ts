// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrayPublishRequest extends $dara.Model {
  /**
   * @example
   * ea8d33aa4371c3499d0***
   */
  xRequestChangeId?: string;
  static names(): { [key: string]: string } {
    return {
      xRequestChangeId: 'X-Request-ChangeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xRequestChangeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

