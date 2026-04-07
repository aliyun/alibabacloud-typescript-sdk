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
   * test.wav
   */
  fileName?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      fileName: 'FileName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      fileName: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

