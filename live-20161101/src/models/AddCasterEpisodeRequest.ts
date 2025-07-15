// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterEpisodeRequest extends $dara.Model {
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
   * The components. Components in the production studio are listed from the bottom to the top in an array.
   * 
   * If a component was added by calling the [AddCasterComponent](https://help.aliyun.com/document_detail/2848030.html) operation, check the value of the response parameter ComponentId to obtain the component ID.
   * 
   * *   This parameter takes effect and is required when the EpisodeType parameter is set to **Component**.
   * *   This parameter is optional when the EpisodeType parameter is set to **Resource**. In this case, if this parameter is specified, the components are bound to and switched together with video resources.
   * 
   * >  The variable N specifies the sequence number of the component. For example, **ComponentId.1** specifies the ID of the first component and **ComponentId.2** specifies the ID of the second component.
   * 
   * @example
   * ["a2b8e671-2fe5-4642-a2ec-bf93880e****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The time when the episode ends. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T09:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the episode.
   * 
   * @example
   * episode_1
   */
  episodeName?: string;
  /**
   * @remarks
   * The type of the episode. Valid values:
   * 
   * *   **Resource**: a video resource.
   * *   **Component**: a component.
   * 
   * This parameter is required.
   * 
   * @example
   * Resource
   */
  episodeType?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the video resource.
   * 
   * >  This parameter takes effect and is required when the EpisodeType parameter is set to Resource.
   * 
   * \\
   * If the video resource was added by calling the [AddCasterVideoResource](https://help.aliyun.com/document_detail/2848020.html) operation, check the value of the response parameter ResourceId to obtain the ID.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The time when the episode starts. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-06-29T08:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The policy for switching episodes. Valid values:
   * 
   * *   **TimeFirst**: The episode starts when the preceding episode ends and ends when the next episode starts. If no next episode exists, the episode keeps repeating until a new episode is added or the production studio stops.
   * *   **ContentFirst**: The episode starts and ends as scheduled.
   * 
   * This parameter takes effect only when the EpisodeType parameter is set to Resource.
   * 
   * >  This parameter must be set to TimeFirst when the video resource is a live stream.
   * 
   * This parameter is required.
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
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
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
      episodeName: 'string',
      episodeType: 'string',
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

