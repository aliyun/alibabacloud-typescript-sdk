// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateFileUploadParamsRequest extends $dara.Model {
  /**
   * @example
   * CloneVoice
   */
  businessType?: string;
  /**
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @example
   * test.wav
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      businessUnitId: 'BusinessUnitId',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      businessUnitId: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

