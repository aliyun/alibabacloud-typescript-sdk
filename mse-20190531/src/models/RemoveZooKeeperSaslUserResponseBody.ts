// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveZooKeeperSaslUserResponseBody extends $dara.Model {
  /**
   * @example
   * True
   */
  data?: boolean;
  /**
   * @example
   * 56D9E600-6348-4260-B35F-583413F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

