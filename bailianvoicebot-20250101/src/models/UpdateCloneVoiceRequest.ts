// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloneVoiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bailian business workspace.
   * 
   * @example
   * llm-3pptowd2olrctsvc
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The ID of the cloned voice.
   * 
   * @example
   * 8ee1160a-6999-478f-8df6-f33ef21f27d5
   */
  cloneVoiceId?: string;
  /**
   * @remarks
   * The name of the cloned voice.
   * 
   * @example
   * TestClonedVoice
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      cloneVoiceId: 'CloneVoiceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      cloneVoiceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

