// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLlmAccessProfileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 33014787-cc13-49d3-ab2f-a98aa8f15fbb
   */
  instanceId?: string;
  /**
   * @remarks
   * The language model access configuration.
   */
  profileShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      profileShrink: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

