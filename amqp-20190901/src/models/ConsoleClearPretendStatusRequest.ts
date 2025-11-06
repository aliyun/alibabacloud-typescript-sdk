// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsoleClearPretendStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  consoleSessionId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

