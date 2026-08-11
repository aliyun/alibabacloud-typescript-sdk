// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVoiceAccessProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The voice service provider.
   * BAILIAN: Bailian.
   * VOLC: Doubao.
   * IFLYTEK: iFLYTEK.
   * TENCENT: Tencent.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The provider configuration information.
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

