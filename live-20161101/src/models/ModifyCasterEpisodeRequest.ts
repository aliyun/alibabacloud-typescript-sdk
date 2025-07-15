// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterEpisodeRequest extends $dara.Model {
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
   * The components. Components in the production studio are listed from the bottom to the top in an array. When the production studio switches to another video resource, the components are also switched.
   * 
   * *   This parameter takes effect and is required only when the EpisodeType parameter is set to **Component**.
   * *   This parameter is optional when the EpisodeType parameter is set to **Resource**. In this case, if this parameter is specified, the components are bound to and switched together with video resources.
   * 
   * >  The variable N specifies the sequence number of the component. For example, ComponentId.1 specifies the ID of the first component and ComponentId.2 specifies the ID of the second component.
   * 
   * @example
   * ["16A96B9A-F203-4EC5-8E43-CB92E68F****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The time when the episode ends. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T10:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the episode. It is included in the response when you call the [AddCasterEpisode](~~94745#doc-api-live-AddCasterEpisode~~ "Adds an episode to a production studio.") operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf938623****
   */
  episodeId?: string;
  /**
   * @remarks
   * The name of the episode.
   * 
   * @example
   * episode_name_1
   */
  episodeName?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the video resource. It is included in the response when you call the [AddCasterVideoResource](~~60250#doc-api-live-AddCasterVideoResource~~ "Adds a video resource to a production studio.") operation.
   * 
   * *   This parameter takes effect and is required only when the EpisodeType is set to **Resource**.
   * *   If the EpisodeType parameter is set to **Component**, this parameter is invalid.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E683****
   */
  resourceId?: string;
  /**
   * @remarks
   * The time when the episode starts. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The policy for switching episodes. This parameter takes effect only when the EpisodeType parameter is set to **Resource**. Valid values:
   * 
   * *   **TimeFirst**: The episode starts when the preceding episode ends and ends when the next episode starts. If no next episode exists, the episode keeps repeating until a new episode is added or the production studio stops. This parameter must be set to TimeFirst when the video resource is a live stream.
   * *   **ContentFirst**: The episode starts and ends as scheduled.
   * 
   * @example
   * TimeFirst
   */
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      componentId: 'ComponentId',
      endTime: 'EndTime',
      episodeId: 'EpisodeId',
      episodeName: 'EpisodeName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      componentId: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      episodeId: 'string',
      episodeName: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceId: 'string',
      startTime: 'string',
      switchType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentId)) {
      $dara.Model.validateArray(this.componentId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

