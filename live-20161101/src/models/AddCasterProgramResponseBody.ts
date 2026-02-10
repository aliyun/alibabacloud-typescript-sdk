// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterProgramResponseBodyEpisodeIdsEpisodeId extends $dara.Model {
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

