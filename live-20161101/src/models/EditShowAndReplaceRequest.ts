// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditShowAndReplaceRequest extends $dara.Model {
  /**
   * @remarks
   * The production studio ID.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, check the CasterId parameter in the response.
   * 
   * - If you created the production studio in the ApsaraVideo Live console, go to **ApsaraVideo Live console** > **Production Studios** > **Cloud Production Studio** to view the ID.
   * 
   * > The production studio name in the production studio list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 53200b81-b761-4c10-842a-a0726d97****
   */
  casterId?: string;
  /**
   * @remarks
   * The end time of the video clip. Unit: seconds.
   * 
   * > - The valid range of the clip time is 0 to the total duration of the show.
   * > - The default value is the end time of the video-on-demand file. The value cannot exceed the total duration of the show.
   * > - For example, to clip a video-on-demand file from the 2nd second to the 5th second, set StartTime to 2.0 and EndTime to 5.0.
   * > - You must specify at least one of StartTime and EndTime.
   * 
   * @example
   * 5.0
   */
  endTime?: number;
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
   * The ID of the show to be clipped. The referenced show must be of the video-on-demand material type (ResourceInfo.ResourceType=vod with a valid resourceId).
   * > Obtain the ShowId value from the response parameters of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/2848051.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 42200b81-b761-4c10-842a-a0726d97****
   */
  showId?: string;
  /**
   * @remarks
   * The start time of the video clip. Unit: seconds.
   * 
   * > - The valid range of the clip time is 0 to the total duration of the show. - By default, the clip starts from the beginning of the video-on-demand file. Value: 0.0.
   * > - For example, to clip a video-on-demand file from the 2nd second to the 5th second, set StartTime to 2.0 and EndTime to 5.0.
   * > - You must specify at least one of StartTime and EndTime.
   * 
   * @example
   * 2.0
   */
  startTime?: number;
  /**
   * @remarks
   * The storage information. This parameter is required. Description:
   * 
   * - **StorageLocation**: the video-on-demand storage address of the user.
   * - **FileName**: the custom file name.
   * 
   * > The video clip storage address must be a video-on-demand storage address under the same account. To obtain the video-on-demand storage address, see [Storage management](https://help.aliyun.com/document_detail/86097.html).
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

