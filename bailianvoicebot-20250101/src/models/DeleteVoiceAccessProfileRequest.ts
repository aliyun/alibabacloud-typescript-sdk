// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVoiceAccessProfileRequest extends $dara.Model {
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  accessProfileId?: string;
  /**
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
      businessUnitId: 'BusinessUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
      businessUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

