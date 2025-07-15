// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditShowAndReplaceRequest extends $dara.Model {
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
  /**
   * @remarks
   * The end time of the editing task. Unit: seconds.
   * 
   * > 
   * 
   * *   The valid values range from 0 to the value indicated by the total length of the episode.
   * 
   * *   By default, this parameter is set to the value that indicates the total length of the episode. The editing period cannot exceed the total length of the episode.
   * 
   * *   If you want to edit a VOD file from the 2nd second to the 5th second, set the StartTime parameter to 2.0 and the EndTime parameter to 5.0.
   * 
   * @example
   * 5.0
   */
  endTime?: number;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the episode to be edited.
   * 
   * >  You can obtain the ID from the response parameter ShowId of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/2848051.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 42200b81-b761-4c10-842a-a0726d97****
   */
  showId?: string;
  /**
   * @remarks
   * The start time of the editing task. Unit: seconds.
   * 
   * > 
   * 
   * *   The valid values range from 0 to the value indicated by the total length of the episode. By default, the editing task starts from the beginning of the episode. Default value: 0.0.
   * 
   * *   If you want to edit a VOD file from the 2nd second to the 5th second, set the StartTime parameter to 2.0 and the EndTime parameter to 5.0.
   * 
   * @example
   * 2.0
   */
  startTime?: number;
  /**
   * @remarks
   * The storage information of the episode. The following fields are included:
   * 
   * *   **StorageLocation**: the storage location of ApsaraVideo VOD.
   * *   **FileName**: the custom file name.
   * 
   * >  Editing outputs must be stored in the VOD bucket within the same account that is used to access both ApsaraVideo VOD and ApsaraVideo Live. For more information about how to obtain the storage location, see [Manage VOD resources](https://help.aliyun.com/document_detail/86097.html).
   * 
   * @example
   * { "StorageLocation":"***bucket***", "FileName":"EditFile****.mp4" }
   */
  storageInfo?: string;
  /**
   * @remarks
   * The user information.
   * 
   * @example
   * 900a2b2r8-13c2-****-88f2-75e4a07c1ed9
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      endTime: 'EndTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      showId: 'ShowId',
      startTime: 'StartTime',
      storageInfo: 'StorageInfo',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      endTime: 'number',
      ownerId: 'number',
      regionId: 'string',
      showId: 'string',
      startTime: 'number',
      storageInfo: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

