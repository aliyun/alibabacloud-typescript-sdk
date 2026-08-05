// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveShowFromShowListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value that is returned in the response.
   * 
   * - If you created the production studio in the LIVE console, find the production studio name in the LIVE console by choosing **LIVE Console** > **Production Studio** > **Cloud Production Studio**.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The show ID.
   * 
   * > Obtain the ShowId from the response of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/2848051.html) operation.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  showId?: string;
  /**
   * @remarks
   * Specifies whether to delete shows in a batch. Valid values:
   * 
   * - true: Deletes shows in a batch.
   * 
   * - false: Deletes a single show.
   * 
   * > If you do not specify this parameter or leave it empty, a single show is deleted.
   * 
   * @example
   * false
   */
  isBatchMode?: boolean;
  /**
   * @remarks
   * The IDs of the shows to delete.
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

