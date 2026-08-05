// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyShowListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value returned in the response.
   * 
   * - If you created the production studio in the LIVE console, find the production studio name on the Cloud Production Studio page. To go to the page, choose **LIVE Console** > **Production Studio** > **Cloud Production Studio**.
   * 
   * > The name of the production studio on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The highest-priority show.
   * 
   * > This parameter can be configured only before the playlist starts.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  highPriorityShowId?: string;
  /**
   * @remarks
   * The time to play the highest-priority show. The format is yyyy-MM-dd\\"T\\"HH:mm:ss.
   * 
   * > This parameter can be configured only before the playlist starts.<br>
   * > After this parameter is configured, the system switches from the currently playing show to the highest-priority show at the specified time.
   * 
   * @example
   * 2021-11-23T12:30:00
   */
  highPriorityShowStartTime?: string;
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
   * The number of times the playlist loops.
   * 
   * > - RepeatTimes specifies the number of repetitions. For example, a value of **0** means the playlist is played once without repetition. A value of **1** means the playlist is played twice (one initial playback and one repetition).
   * >
   * > - A value of -1 indicates that the playlist loops indefinitely.
   * 
   * @example
   * 5
   */
  repeatTimes?: number;
  /**
   * @remarks
   * The ID of the show whose position in the playlist you want to modify.
   * 
   * > Obtain the ShowId value from the response of the [AddShowIntoShowList](https://help.aliyun.com/document_detail/2848051.html) or [DescribeShowList](https://help.aliyun.com/document_detail/2848054.html) operation.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  showId?: string;
  /**
   * @remarks
   * The new position of the show in the playlist. The show specified by ShowId is moved to the position specified by **Spot**.
   * 
   * > The value must be greater than or equal to 0 and less than or equal to the total number of shows in the playlist.
   * 
   * @example
   * 1
   */
  spot?: number;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      highPriorityShowId: 'HighPriorityShowId',
      highPriorityShowStartTime: 'HighPriorityShowStartTime',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      repeatTimes: 'RepeatTimes',
      showId: 'ShowId',
      spot: 'Spot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      highPriorityShowId: 'string',
      highPriorityShowStartTime: 'string',
      ownerId: 'number',
      regionId: 'string',
      repeatTimes: 'number',
      showId: 'string',
      spot: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

