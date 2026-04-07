// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloneVoiceRequest extends $dara.Model {
  /**
   * @example
   * llm-xdne77rxe14ziszr
   */
  businessUnitId?: string;
  fileKey?: string;
  /**
   * @example
   * CosyVoice
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      fileKey: 'FileKey',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      fileKey: 'string',
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

