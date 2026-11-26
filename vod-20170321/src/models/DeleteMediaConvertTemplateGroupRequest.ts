// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMediaConvertTemplateGroupRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  forceDelGroup?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateGroupId?: string;
  /**
   * @example
   * e0d1a64b2e5f3c8a9b0c1d2e3f4051****,4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateIdList?: string;
  static names(): { [key: string]: string } {
    return {
      forceDelGroup: 'ForceDelGroup',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateIdList: 'TranscodeTemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelGroup: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

