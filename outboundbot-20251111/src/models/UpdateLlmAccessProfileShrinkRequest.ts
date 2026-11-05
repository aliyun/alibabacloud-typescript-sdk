// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLlmAccessProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The access profile ID.
   * 
   * @example
   * ed06946e-dcbb-4f3a-baf8-a5feae0198e9
   */
  accessProfileId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4eee9bf8-1319-468f-ac82-83c50ae389f8
   */
  instanceId?: string;
  /**
   * @remarks
   * The language model access configuration.
   */
  profileShrink?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      instanceId: 'InstanceId',
      profileShrink: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
      instanceId: 'string',
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

