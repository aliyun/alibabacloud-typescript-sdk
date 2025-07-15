// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterProgramRequestEpisode extends $dara.Model {
  /**
   * @remarks
   * The components. Components in the production studio are listed from the bottom to the top in an array.
   * 
   * >  This parameter is required and takes effect when the Episode.N.EpisodeType parameter is set to Component.
   * 
   * This parameter is optional when the Episode.N.EpisodeType parameter is set to **Resource**. In this case, if this parameter is specified, the components are bound to and switched together with video resources.
   * 
   * @example
   * [ "a2b8e671-2fe5-4642-a2ec-bf931826****",  "a2b8e671-2fe5-4642-a2ec-28374657****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The end time of the episode. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T10:02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the episode.
   * 
   * @example
   * program_name_1
   */
  episodeName?: string;
  /**
   * @remarks
   * The type of the episode.
   * 
   * *   **Resource**: a video resource If you set this parameter to Resource, you must specify the Episode.N.ResourceId and Episode.N.SwitchType parameters.
   * *   **Component**: a component If you set this parameter to Component, you must specify the Episode.N.ComponentId.N parameter.
   * 
   * @example
   * Resource
   */
  episodeType?: string;
  /**
   * @remarks
   * The ID of the video resource.
   * 
   * >  This parameter takes effect and is required when the Episode.N.EpisodeType parameter is set to Resource.
   * 
   * \\
   * This parameter is invalid if you set the Episode.N.EpisodeType parameter to **Component**.
   * 
   * If the video resource was added by calling the [AddCasterVideoResource](https://help.aliyun.com/document_detail/60250.html) operation, check the value of the response parameter ResourceId to obtain the ID.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  resourceId?: string;
  /**
   * @remarks
   * The start time of the episode. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The policy for switching episodes. Valid values:
   * 
   * >  This parameter takes effect only when the Episode.N.EpisodeType parameter is set to Resource.
   * 
   * *   **TimeFirst**: The episode starts when the previous episode ends and ends when the next episode starts. If no next episode exists, the episode keeps repeating until a new episode is added or the production studio stops. This value is required for live video resources.
   * *   **ContentFirst**: The episode starts and ends as scheduled.
   * 
   * @example
   * TimeFirst
   */
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      endTime: 'EndTime',
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      episodeName: 'string',
      episodeType: 'string',
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

export class AddCasterProgramRequest extends $dara.Model {
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
   * The information about episodes in the episode list.
   * 
   * This parameter is required.
   */
  episode?: AddCasterProgramRequestEpisode[];
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episode: 'Episode',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episode: { 'type': 'array', 'itemType': AddCasterProgramRequestEpisode },
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.episode)) {
      $dara.Model.validateArray(this.episode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

