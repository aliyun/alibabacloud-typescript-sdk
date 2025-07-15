// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterProgramResponseBodyEpisodeIdsEpisodeId extends $dara.Model {
  /**
   * @remarks
   * The ID of the episode. You can use the ID as a request parameter in the API operation that is used to modify the episode list, query the information about the episode list, delete the episode, or modify the configurations of the episode.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  episodeId?: string;
  static names(): { [key: string]: string } {
    return {
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponseBodyEpisodeIds extends $dara.Model {
  episodeId?: AddCasterProgramResponseBodyEpisodeIdsEpisodeId[];
  static names(): { [key: string]: string } {
    return {
      episodeId: 'EpisodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: { 'type': 'array', 'itemType': AddCasterProgramResponseBodyEpisodeIdsEpisodeId },
    };
  }

  validate() {
    if(Array.isArray(this.episodeId)) {
      $dara.Model.validateArray(this.episodeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterProgramResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the episodes. The episode IDs are listed in the same order as specified by the variable N.
   */
  episodeIds?: AddCasterProgramResponseBodyEpisodeIds;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      episodeIds: 'EpisodeIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeIds: AddCasterProgramResponseBodyEpisodeIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.episodeIds && typeof (this.episodeIds as any).validate === 'function') {
      (this.episodeIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

