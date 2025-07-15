// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingJobInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * *   If the production studio was created by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the value of the response parameter CasterId to obtain the ID.
   * *   If the production studio was created by using the ApsaraVideo Live console, obtain the ID on the **Production Studio Management** page. To go to the page, log on to the **ApsaraVideo Live console** and click **Production Studios** in the left-side navigation pane.
   * 
   * >  You can find the ID of the production studio in the Instance ID/Name column.
   * 
   * This parameter is required.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  casterId?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the episode for which you want to query editing tasks.
   * 
   * >  You can obtain the ID from the response parameter ShowId of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/370861.html) operation.
   * 
   * @example
   * 72200b81-b761-4c10-842a-a0726d97****
   */
  showId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      showId: 'ShowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      ownerId: 'number',
      regionId: 'string',
      showId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

