// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAppRequirementRequest extends $dara.Model {
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 5b7105a2-2999-430b-ba23-ba09149d5434
   */
  conversationId?: string;
  /**
   * @remarks
   * Requirement document content
   * 
   * @example
   * prd
   */
  prd?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      prd: 'Prd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      prd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

