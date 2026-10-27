// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVoiceAccessProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The speech engine.
   * 
   * @example
   * VOLC
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The parameter settings.
   */
  profileShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nlsEngine: 'NlsEngine',
      profileShrink: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

