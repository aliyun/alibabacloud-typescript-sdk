// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDefaultTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * This parameter is required.
   * 
   * @example
   * d58079958be8d*****b699ab7ab6e1bf
   */
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transcodeTemplateGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

