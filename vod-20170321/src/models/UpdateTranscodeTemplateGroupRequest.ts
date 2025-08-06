// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The lock status of the transcoding template group. Valid values:
   * 
   * *   **Enabled**: The transcoding template group is locked and cannot be modified.
   * *   **Disabled** (default): The transcoding template group is not locked.
   * 
   * @example
   * Disabled
   */
  locked?: string;
  /**
   * @remarks
   * The name of the transcoding template group.
   * 
   * *   The name cannot exceed 128 bytes.
   * *   The value must be encoded in UTF-8.
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
   * The configurations of the transcoding template. The value must be a JSON string. For more information about the data structure, see [TranscodeTemplate](~~52839#title-9mb-8o2-uu6~~).
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

