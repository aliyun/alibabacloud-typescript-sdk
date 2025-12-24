// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTerminalSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求ID
   * 
   * @example
   * 47348885-C929-489A-93D7-B2E99D50D77B
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

