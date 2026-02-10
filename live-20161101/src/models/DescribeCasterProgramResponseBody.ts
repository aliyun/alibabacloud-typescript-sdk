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
  componentIds?: DescribeCasterProgramResponseBodyEpisodesEpisodeComponentIds;
  endTime?: string;
  episodeId?: string;
  episodeName?: string;
  episodeType?: string;
  resourceId?: string;
  startTime?: string;
  status?: number;
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

