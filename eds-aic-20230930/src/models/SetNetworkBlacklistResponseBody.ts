// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetNetworkBlacklistResponseBody extends $dara.Model {
  /**
   * @example
   * 2B9E6946-0E2A-5D2B-B275-361DF81F****
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

