// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The lock state of the template group. Valid values:
   * 
   * - **Enabled**: locked. A locked template group cannot be modified.
   * - **Disabled** (default): unlocked.
   * 
   * Default value: **Disabled**. If you specify this parameter, the lock state of the template group is changed, while the name and configurations of the transcoding template group remain unchanged.
   * 
   * @example
   * Disabled
   */
  locked?: string;
  /**
   * @remarks
   * The name of the transcoding template group.
   * 
   * - The name can be up to 128 bytes in length.
   * - The name is encoded in UTF-8.
   * 
   * @example
   * transcodetemplate
   */
  name?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c71a339fe*****52b4fa6f4527
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The transcoding template configurations (a JSON string). For more information about the parameter structure, see [TranscodeTemplate](~~52839#title-9mb-8o2-uu6~~).
   * 
   * @example
   * [{"Video":{"Bitrate":"400","Codec":"H.264","Fps":"30"},"Audio":{"Codec":"AAC","Bitrate":"64","Definition":"SD","EncryptType":"Private","Container":{"Format":"m3u8"},"PackageType":"HLSPackage"}}]
   */
  transcodeTemplateList?: string;
  static names(): { [key: string]: string } {
    return {
      locked: 'Locked',
      name: 'Name',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateList: 'TranscodeTemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locked: 'string',
      name: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

