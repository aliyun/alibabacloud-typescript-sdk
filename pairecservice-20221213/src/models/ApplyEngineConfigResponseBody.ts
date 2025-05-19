// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * F8F613A9-DF1C-551A-88E1-397A3981A785
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

