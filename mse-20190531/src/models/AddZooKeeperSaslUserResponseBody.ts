// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZooKeeperSaslUserResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 5B170A0D-2C5D-4CF8-B808-03966B86****
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

