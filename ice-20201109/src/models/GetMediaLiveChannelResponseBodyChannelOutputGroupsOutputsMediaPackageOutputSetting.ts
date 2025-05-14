// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaLiveChannelResponseBodyChannelOutputGroupsOutputsMediaPackageOutputSetting extends $dara.Model {
  /**
   * @remarks
   * The manifest audio group ID.
   * 
   * @example
   * audiogroup
   */
  audioGroupId?: string;
  /**
   * @remarks
   * The manifest name modifier. The child manifests include this modifier in their M3U8 file names.
   * 
   * @example
   * 480p
   */
  nameModifier?: string;
  static names(): { [key: string]: string } {
    return {
      audioGroupId: 'AudioGroupId',
      nameModifier: 'NameModifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioGroupId: 'string',
      nameModifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

