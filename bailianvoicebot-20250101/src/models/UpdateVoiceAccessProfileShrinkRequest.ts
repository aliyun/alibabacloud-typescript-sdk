// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVoiceAccessProfileShrinkRequest extends $dara.Model {
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @example
   * llm-xdne77rxe14ziszr
   */
  businessUnitId?: string;
  /**
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  profileShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      businessUnitId: 'BusinessUnitId',
      nlsEngine: 'NlsEngine',
      profileShrink: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
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

