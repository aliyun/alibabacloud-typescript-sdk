// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloneVoiceRequest extends $dara.Model {
  /**
   * @example
   * llm-3pptowd2olrctsvc
   */
  businessUnitId?: string;
  /**
   * @example
   * 8ee1160a-6999-478f-8df6-f33ef21f27d5
   */
  cloneVoiceId?: string;
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

