// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVoiceAccessProfileShrinkRequest extends $dara.Model {
  /**
   * @example
   * llm-xdne77rxe14ziszr
   */
  businessUnitId?: string;
  /**
   * @example
   * VOLC
   */
  nlsEngine?: string;
  profileShrink?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      nlsEngine: 'NlsEngine',
      profileShrink: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      nlsEngine: 'string',
      profileShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

