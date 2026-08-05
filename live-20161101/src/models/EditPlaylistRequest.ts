// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditPlaylistRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The playlist configuration. For more information, see **ProgramConfig**.
   * 
   * @example
   * [{"RepeatNumber":"0","ProgramName":"my program"}]
   */
  programConfig?: string;
  /**
   * @remarks
   * The playlist ID. If you add playlist items by calling the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation, use the ProgramId value returned by the call.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * The list of playlist items. This is a JSON string. For more information, see **InputProgramItem**.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ItemName":"item1","ResourceType":"vod","ResourceValue":"5f8809f2-3352-4d1f-a8f7-86f9429f****"}, {"ItemName": "item2","ResourceType": "vod","ResourceValue": "e7411c0b-dd98-4c61-a545-f8bfba6c****"}]
   */
  programItems?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      programConfig: 'ProgramConfig',
      programId: 'ProgramId',
      programItems: 'ProgramItems',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      programConfig: 'string',
      programId: 'string',
      programItems: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

