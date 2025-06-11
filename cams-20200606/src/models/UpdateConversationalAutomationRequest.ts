// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateConversationalAutomationRequestCommands } from "./UpdateConversationalAutomationRequestCommands";


export class UpdateConversationalAutomationRequest extends $dara.Model {
  /**
   * @remarks
   * The commands.
   */
  commands?: UpdateConversationalAutomationRequestCommands[];
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account or the instance ID of the customer of Alibaba Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * 2993****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the welcoming message.
   * 
   * @example
   * true
   */
  enableWelcomeMessage?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the enterprise.
   * 
   * This parameter is required.
   * 
   * @example
   * 86130000***
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The opening remarks.
   */
  prompts?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      custSpaceId: 'CustSpaceId',
      enableWelcomeMessage: 'EnableWelcomeMessage',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prompts: 'Prompts',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': UpdateConversationalAutomationRequestCommands },
      custSpaceId: 'string',
      enableWelcomeMessage: 'boolean',
      ownerId: 'number',
      phoneNumber: 'string',
      prompts: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

