// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTranscodeTemplateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to force delete the entire transcoding template group. Valid values:
   * 
   * - **true**: Force deletes the entire template group and all its transcoding templates.
   * - **false** (default): Deletes only the specified transcoding templates.
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
   * - Separate multiple IDs with commas (,).
   * - A maximum of 10 template IDs are supported.
   * - This parameter is required if the ForceDelGroup parameter is empty or set to false.
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

