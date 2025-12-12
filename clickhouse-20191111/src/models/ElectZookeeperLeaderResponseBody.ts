// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectZookeeperLeaderResponseBody extends $dara.Model {
  /**
   * @example
   * 7D3ECB0E-98CA-5E08-A9CA-F70C5A1E9BDF
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

