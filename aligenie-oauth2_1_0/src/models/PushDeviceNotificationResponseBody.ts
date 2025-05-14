// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceNotificationResponseBody extends $dara.Model {
  /**
   * @example
   * 908FA068-529C-0C20-8DB5-63B0EF7CFF1F
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

