// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConversationalAutomationResponseBodyDataCommands } from "./GetConversationalAutomationResponseBodyDataCommands";


export class GetConversationalAutomationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The commands.
   */
  commands?: GetConversationalAutomationResponseBodyDataCommands[];
  /**
   * @remarks
   * Indicates whether the welcoming message is enabled.
   * 
   * @example
   * true
   */
  enableWelcomeMessage?: boolean;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * @example
   * 86138****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The opening remarks.
   */
  prompts?: string[];
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      enableWelcomeMessage: 'EnableWelcomeMessage',
      phoneNumber: 'PhoneNumber',
      prompts: 'Prompts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': GetConversationalAutomationResponseBodyDataCommands },
      enableWelcomeMessage: 'boolean',
      phoneNumber: 'string',
      prompts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.prompts)) {
      $dara.Model.validateArray(this.prompts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

