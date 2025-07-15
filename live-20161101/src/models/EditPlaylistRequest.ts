// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditPlaylistRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The configurations of the episode list. For more information, see the **ProgramConfig** section of this topic.
   * 
   * @example
   * [{"RepeatNumber":"0","ProgramName":"my program"}]
   */
  programConfig?: string;
  /**
   * @remarks
   * The ID of the episode list. If the episode list was created by calling the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation, check the value of the response parameter ProgramId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * The episodes that you want to add to the production studio. The value is a JSON string. For more information, see the **InputProgramItem** section of this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ItemName":"item1","ResourceType":"vod","ResourceValue":"5f8809f2-3352-4d1f-a8f7-86f9429f****"}, {"ItemName": "item2","ResourceType": "vod","ResourceValue": "e7411c0b-dd98-4c61-a545-f8bfba6c****"}]
   */
  programItems?: string;
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

