// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyShowListRequest extends $dara.Model {
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
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The episode of the highest priority.
   * 
   * >  You can configure this parameter only before the playback of the episode list starts.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  highPriorityShowId?: string;
  /**
   * @remarks
   * The time at which the episode of the highest priority is played. Format: yyyy-MM-dd\\"T\\"HH:mm:ss.
   * 
   * >  You can configure this parameter only before the episode list starts playing.\\
   * After you configure this parameter, when the specified point in time is reached, any episode that is playing stops and the episode of the highest priority in the episode list starts to play.
   * 
   * @example
   * 2021-11-23T12:30:00
   */
  highPriorityShowStartTime?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The number of additional times the episode list is played.
   * 
   * > 
   * 
   * *   The RepeatTimes parameter specifies the number of repetitions. For example, if you set the value to **0**, the episode list is played **once**. If you set the value to **1**, the episode list is played **twice**.********
   * 
   * *   If you set the value to -1, the episode list is repeated indefinitely.
   * 
   * @example
   * 5
   */
  repeatTimes?: number;
  /**
   * @remarks
   * The ID of the episode for which you want to change the position in the playlist.
   * 
   * >  You can call the [AddShowIntoShowList](https://help.aliyun.com/document_detail/2848051.html) or [DescribeShowList](https://help.aliyun.com/document_detail/2848054.html) operation and check the value of the response parameter ShowId to obtain the ID.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  showId?: string;
  /**
   * @remarks
   * The position of the episode in the episode list. If you want to change the position of an episode in a playlist, place the ID of the episode in **Spot**.
   * 
   * >  The value must be greater than or equal to 0 and less than or equal to the total number of episodes in the playlist.
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

