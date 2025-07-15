// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterProgramResponseBodyEpisodesEpisodeComponentIds extends $dara.Model {
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeCasterProgramResponseBodyEpisodesEpisode extends $dara.Model {
  /**
   * @remarks
   * The components.
   */
  componentIds?: DescribeCasterProgramResponseBodyEpisodesEpisodeComponentIds;
  /**
   * @remarks
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-06-29T10:02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the episode.
   * 
   * @example
   * 1872639A-F203-4EC5-8E43-CB92E68F****
   */
  episodeId?: string;
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
   * The type of the episode. Valid values:
   * 
   * *   **Resource**: a video resource
   * *   **Component**: a component
   * 
   * @example
   * Resource
   */
  episodeType?: string;
  /**
   * @remarks
   * The ID of the video resource.
   * 
   * @example
   * 1872639A-F203-4EC5-8E43-CB92E837****
   */
  resourceId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the episode.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The policy for switching episodes. Valid values:
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
      componentIds: 'ComponentIds',
      endTime: 'EndTime',
      episodeId: 'EpisodeId',
      episodeName: 'EpisodeName',
      episodeType: 'EpisodeType',
      resourceId: 'ResourceId',
      startTime: 'StartTime',
      status: 'Status',
      switchType: 'SwitchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentIds: DescribeCasterProgramResponseBodyEpisodesEpisodeComponentIds,
      endTime: 'string',
      episodeId: 'string',
      episodeName: 'string',
      episodeType: 'string',
      resourceId: 'string',
      startTime: 'string',
      status: 'number',
      switchType: 'string',
    };
  }

  validate() {
    if(this.componentIds && typeof (this.componentIds as any).validate === 'function') {
      (this.componentIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterProgramResponseBodyEpisodes extends $dara.Model {
  episode?: DescribeCasterProgramResponseBodyEpisodesEpisode[];
  static names(): { [key: string]: string } {
    return {
      episode: 'Episode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episode: { 'type': 'array', 'itemType': DescribeCasterProgramResponseBodyEpisodesEpisode },
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

export class DescribeCasterProgramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The list of the episodes.
   */
  episodes?: DescribeCasterProgramResponseBodyEpisodes;
  /**
   * @remarks
   * Indicates whether carousel playback is enabled.
   * 
   * *   **0**: Carousel playback is disabled.
   * *   **1**: Carousel playback is enabled.
   * 
   * @example
   * 1
   */
  programEffect?: number;
  /**
   * @remarks
   * The name of the episode list.
   * 
   * @example
   * programs_name
   */
  programName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episodes: 'Episodes',
      programEffect: 'ProgramEffect',
      programName: 'ProgramName',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      episodes: DescribeCasterProgramResponseBodyEpisodes,
      programEffect: 'number',
      programName: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.episodes && typeof (this.episodes as any).validate === 'function') {
      (this.episodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

