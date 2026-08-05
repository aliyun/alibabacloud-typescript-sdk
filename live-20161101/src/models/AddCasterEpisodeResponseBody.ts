// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterEpisodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the episode. This ID can be used as a request parameter to query the episode list, modify an episode, or delete an episode.
   * 
   * @example
   * 21926b36-7dd2-4fde-ae25-51b5bc8e****
   */
  episodeId?: string;
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
      episodeId: 'EpisodeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      episodeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

