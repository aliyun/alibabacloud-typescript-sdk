// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloneVoiceRequest extends $dara.Model {
  /**
   * @example
   * llm-zzu528i29ecnprcl
   */
  businessUnitId?: string;
  /**
   * @example
   * 8ee1160a-6999-478f-8df6-f33ef21f27d5
   */
  cloneVoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      cloneVoiceId: 'CloneVoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      cloneVoiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

