// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPlaylistItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster operation](https://help.aliyun.com/document_detail/2848009.html), check the CasterId parameter value returned by the CreateCaster operation.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, navigate to **ApsaraVideo Live console** > **Production Studios** > **Cloud Production Studio** to view the production studio name.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page of the ApsaraVideo Live console is the production studio ID.
   * 
   * 
   * The production studio must meet the following configurations:
   * - **NormType**: **3**. Create a lightweight carousel production studio in advance. You can call the **CreateCaster** operation to create a production studio.
   * - **CasterTemplate**: lp_noTranscode.
   * - **channelEnable**: 0.
   * - **programEffect**: 1.
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
   * The playlist item configuration. If this is the first time you add a playlist item, specify this parameter for initialization. For more information, see **ProgramConfig**.
   * 
   * @example
   * [{"RepeatNumber":"0","ProgramName":"my program"}]
   */
  programConfig?: string;
  /**
   * @remarks
   * The playlist ID. If the production studio already has a playlist, you must specify the corresponding ProgramId. If no playlist has been created, you can leave this parameter empty, and the system performs automatic creation.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * The list of playlist item inputs. The value is a JSON string. For more information, see **InputProgramItem**.
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

