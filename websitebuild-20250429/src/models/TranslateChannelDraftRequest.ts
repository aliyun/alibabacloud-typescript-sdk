// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranslateChannelDraftRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel draft.
   * 
   * This parameter is required.
   * 
   * @example
   * draft-789
   */
  draftId?: string;
  static names(): { [key: string]: string } {
    return {
      draftId: 'DraftId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draftId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

