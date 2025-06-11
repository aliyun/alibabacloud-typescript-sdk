// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConversationalAutomationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The commands.
   */
  commandsShrink?: string;
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
  promptsShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      commandsShrink: 'Commands',
      custSpaceId: 'CustSpaceId',
      enableWelcomeMessage: 'EnableWelcomeMessage',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      promptsShrink: 'Prompts',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandsShrink: 'string',
      custSpaceId: 'string',
      enableWelcomeMessage: 'boolean',
      ownerId: 'number',
      phoneNumber: 'string',
      promptsShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

