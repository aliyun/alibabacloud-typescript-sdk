// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveShowFromShowListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/69338.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the episode.
   * 
   * >  You can obtain the ID by checking the value of the response parameter ShowId of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/370861.html) operation.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  showId?: string;
  /**
   * @remarks
   * Specifies whether to remove multiple episodes at a time. Valid values:
   * 
   * *   true: removes multiple episodes at a time.
   * *   false: removes a single episode.
   * 
   * >  If you do not configure this parameter or this parameter is left empty, a single episode is to be removed.
   * 
   * @example
   * false
   */
  isBatchMode?: boolean;
  /**
   * @remarks
   * The IDs of episodes that you want to remove.
   */
  showIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      showId: 'ShowId',
      isBatchMode: 'isBatchMode',
      showIdList: 'showIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      showId: 'string',
      isBatchMode: 'boolean',
      showIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.showIdList)) {
      $dara.Model.validateArray(this.showIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

