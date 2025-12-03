// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableNetworkInterfaceQoSResponseBody extends $dara.Model {
  /**
   * @example
   * 745CEC9F-0DD7-4451-9FE7-8B752F39****
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

