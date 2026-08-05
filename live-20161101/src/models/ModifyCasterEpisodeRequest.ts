// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterEpisodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you created the production studio by calling the [CreateCaster](https://help.aliyun.com/document_detail/2848009.html) operation, use the CasterId value that is returned in the response.
   * 
   * - If you created the production studio in the LIVE console, find the ID on the Cloud Production Studio page. To go to the page, choose **LIVE Console** > **Production Studio** > **Cloud Production Studio**.
   * 
   * > The name of a production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The IDs of the components. The components are arranged from bottom to top and are switched in sync with the video source.
   * 
   * - This parameter is required and takes effect only if EpisodeType is set to **Component**.
   * 
   * - If EpisodeType is set to **Resource**, this parameter specifies the components that are attached to the video source and switched in sync.
   * 
   * > N specifies the Nth component ID. For example, ComponentId.1 specifies the first component ID and ComponentId.2 specifies the second component ID.
   * 
   * @example
   * ["16A96B9A-F203-4EC5-8E43-CB92E68F****"]
   */
  componentId?: string[];
  /**
   * @remarks
   * The end time. The time must be in UTC. The format is *yyyy-MM-dd*T*HH:mm:ss*Z.
   * 
   * @example
   * 2016-06-29T10:20:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the episode.
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
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the video source.
   * 
   * - This parameter is required and takes effect only if EpisodeType is set to **Resource**.
   * 
   * - This parameter is not available if EpisodeType is set to **Component**.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E683****
   */
  resourceId?: string;
  /**
   * @remarks
   * The start time. The time must be in UTC. The format is *yyyy-MM-dd*T*HH:mm:ss*Z.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The switch policy. This parameter takes effect only if EpisodeType is set to **Resource**.
   * 
   * - **TimeFirst**: time-priority. This is the only policy available for live stream video sources.
   * 
   * - **ContentFirst**: content-priority.
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

