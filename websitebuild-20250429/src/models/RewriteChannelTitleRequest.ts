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
   * The user personalization requirement in free text. This parameter is optional.
   * 
   * @example
   * xxx
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

