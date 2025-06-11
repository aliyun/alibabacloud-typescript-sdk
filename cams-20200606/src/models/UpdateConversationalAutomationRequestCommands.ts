// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConversationalAutomationRequestCommands extends $dara.Model {
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * Command 1.
   */
  commandDescription?: string;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * test
   */
  commandName?: string;
  static names(): { [key: string]: string } {
    return {
      commandDescription: 'CommandDescription',
      commandName: 'CommandName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandDescription: 'string',
      commandName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

