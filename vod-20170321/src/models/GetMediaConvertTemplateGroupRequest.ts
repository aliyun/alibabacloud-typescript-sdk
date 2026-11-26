// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConvertTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the transcoding template group. Only MC transcoding template groups created by calling AddMediaConvertTemplateGroup can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c71a339fe52b4fa6f4527****
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

