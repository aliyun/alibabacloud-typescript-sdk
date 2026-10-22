// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryChannelPublishRequest extends $dara.Model {
  /**
   * @remarks
   * The channel draft ID.
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

