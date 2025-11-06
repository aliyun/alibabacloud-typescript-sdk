// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsoleSavePretendStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      key: 'Key',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      key: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

