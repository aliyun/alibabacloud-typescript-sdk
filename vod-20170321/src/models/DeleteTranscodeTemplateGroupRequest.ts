// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the transcoding template group. Valid values:
   * 
   * *   **true**: deletes the transcoding template group and all the transcoding templates in the group.
   * *   **false** (default): deletes only the specified transcoding templates from the transcoding template group.
   * 
   * @example
   * true
   */
  forceDelGroup?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * This parameter is required.
   * 
   * @example
   * 4c71a339fec*****152b4fa6f4527
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The IDs of the transcoding templates that you want to delete.
   * 
   * *   Separate multiple IDs with commas (,).
   * *   You can specify a maximum of 10 IDs.
   * *   This parameter is required if you set ForceDelGroup to false or leave ForceDelGroup empty.
   * 
   * @example
   * ["613702defdc4*****6a3b94cace1129e","bfd6c90253a2*****7fc054d7c5825"]
   */
  transcodeTemplateIds?: string;
  static names(): { [key: string]: string } {
    return {
      forceDelGroup: 'ForceDelGroup',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateIds: 'TranscodeTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelGroup: 'string',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

