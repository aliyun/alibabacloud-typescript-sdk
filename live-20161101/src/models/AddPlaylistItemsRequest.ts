// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPlaylistItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * The production studio must use the following configurations:
   * 
   * *   **NormType**: 3****. You need to call the **CreateCaster** operation to create a production studio for lightweight carousel playback in advance.
   * *   **CasterTemplate**: lp_noTranscode.
   * *   **channelEnable**: 0.
   * *   **programEffect**: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 0e94d1f4-1a65-445c-9dcf-de8b3b8d****
   */
  casterId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The configurations of the episode list. If the episode list is added to the production studio for the first time, specify this parameter to pass in the initial configurations. For more information, see the **ProgramConfig** section of this topic.
   * 
   * @example
   * [{"RepeatNumber":"0","ProgramName":"my program"}]
   */
  programConfig?: string;
  /**
   * @remarks
   * The ID of the episode list. If you do not specify this parameter, an episode list is created by default.
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
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      programConfig: 'ProgramConfig',
      programId: 'ProgramId',
      programItems: 'ProgramItems',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
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

