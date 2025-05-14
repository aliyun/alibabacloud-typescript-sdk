// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting } from "./UpdateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting";


export class UpdateMediaLiveChannelRequestOutputGroupsOutputs extends $dara.Model {
  /**
   * @remarks
   * The referenced AudioSettings.
   */
  audioSettingNames?: string[];
  /**
   * @remarks
   * The settings of the output delivered to MediaPackage.
   */
  mediaPackageOutputSetting?: UpdateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting;
  /**
   * @remarks
   * The media type of the output. Valid values:
   * 
   * *   0: Audio and Video
   * *   1: Audio If you set the value to 1, you cannot reference VideoSettings.
   * *   2: Video. If you set the value to 2, you cannot reference AudioSettings.
   * 
   * @example
   * 0
   */
  mediaType?: number;
  /**
   * @remarks
   * The name of the output. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * output1
   */
  name?: string;
  /**
   * @remarks
   * The name of the referenced VideoSettings.
   * 
   * @example
   * myVideo1
   */
  videoSettingName?: string;
  static names(): { [key: string]: string } {
    return {
      audioSettingNames: 'AudioSettingNames',
      mediaPackageOutputSetting: 'MediaPackageOutputSetting',
      mediaType: 'MediaType',
      name: 'Name',
      videoSettingName: 'VideoSettingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSettingNames: { 'type': 'array', 'itemType': 'string' },
      mediaPackageOutputSetting: UpdateMediaLiveChannelRequestOutputGroupsOutputsMediaPackageOutputSetting,
      mediaType: 'number',
      name: 'string',
      videoSettingName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioSettingNames)) {
      $dara.Model.validateArray(this.audioSettingNames);
    }
    if(this.mediaPackageOutputSetting && typeof (this.mediaPackageOutputSetting as any).validate === 'function') {
      (this.mediaPackageOutputSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

