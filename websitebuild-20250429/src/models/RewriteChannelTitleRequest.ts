// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RewriteChannelTitleRequest extends $dara.Model {
  /**
   * @remarks
   * The channel draft ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c80359e-835d-4871-a971-8400d008828b
   */
  draftId?: string;
  /**
   * @remarks
   * The custom requirement specified by the user. This parameter is optional and accepts free text.
   * 
   * @example
   * Highlight the main features and keep the title concise and clear
   */
  userRequirement?: string;
  static names(): { [key: string]: string } {
    return {
      draftId: 'DraftId',
      userRequirement: 'UserRequirement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draftId: 'string',
      userRequirement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

