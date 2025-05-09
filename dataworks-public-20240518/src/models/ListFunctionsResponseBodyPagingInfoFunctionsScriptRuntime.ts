// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime extends $dara.Model {
  /**
   * @remarks
   * The command.
   * 
   * @example
   * ODPS_FUNCTION
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

