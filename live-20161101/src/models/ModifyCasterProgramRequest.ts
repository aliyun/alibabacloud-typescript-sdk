// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterProgramRequestEpisode extends $dara.Model {
  /**
   * @remarks
   * The list of component IDs. The components are layered from bottom to top in the order they are listed. The components are switched in sync with the video source.
   * 
   * - This parameter is required and takes effect only when the node type is **Component**.
   * 
   * - If the node type is **Resource**, the components are attached to the video source and switched in sync.
   * 
   * @example
   * ["a2b8e671-2fe5-4642-a2ec-bf93888****" ]
   */
  componentId?: string[];
  /**
   * @remarks
   * The end time. The time is in UTC. The format is *yyyy-MM-dd*T*HH:mm:ss*Z.
   * 
   * @example
   * 2016-06-29T10:04:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The program ID. If you add a program for the production studio by calling the [AddCasterEpisode]() operation, use the value of the EpisodeId parameter that is returned in the response.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf938887****
   */
  episodeId?: string;
  /**
   * @remarks
   * The program name.
   * 
   * @example
   * program_name_2
   */
  episodeName?: string;
  /**
   * @remarks
   * The program type. Valid values:
   * 
   * - **Resource**: video source.
   * 
   * - **Component**: component.
   * 
   * @example
   * Resource
   */
  episodeType?: string;
  /**
   * @remarks
   * The ID of the video source. If you add a video source for the production studio by calling the [AddCasterVideoResource]() operation, use the value of the ResourceId parameter that is returned in the response.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf938887****
   */
  resourceId?: string;
  /**
   * @remarks
   * The start time. The time is in UTC. The format is *yyyy-MM-dd*T*HH:mm:ss*Z.
   * 
   * @example
   * 2016-06-29T09:02:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The switch policy. This parameter is valid only when the node type is **Resource**.
   * 
   * - **TimeFirst**: time-first. This is the only valid policy for live stream video sources.
   * 
   * - **ContentFirst**: content-first.
   * 
   * @example
   * TimeFirst
   */
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      endTime: 'EndTime',
      episodeId: 'EpisodeId',
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
      episodeId: 'string',
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

export class ModifyCasterProgramRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * - If you create a production studio by calling the [CreateCaster]() operation, use the value of the CasterId parameter that is returned in the response.
   * 
   * - If you create a production studio in the ApsaraVideo Live console, go to the **Production Studio** > **Cloud Production Studio** page to view the ID.
   * 
   * > The name of the production studio in the list on the Cloud Production Studio page is the production studio ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The program information.
   * 
   * This parameter is required.
   */
  episode?: ModifyCasterProgramRequestEpisode[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
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
      episode: { 'type': 'array', 'itemType': ModifyCasterProgramRequestEpisode },
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

