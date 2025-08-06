// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * This parameter is required.
   * 
   * @example
   * a591f697c7167*****6ae1502142d0
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

