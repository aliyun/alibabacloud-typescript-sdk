// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloneVoiceRequest extends $dara.Model {
  fileKey?: string;
  /**
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @example
   * CosyVoice
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      instanceId: 'InstanceId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      instanceId: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

