// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterEpisodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. You can use the ID as a request parameter in the API operation that is used to copy the configurations of a scene, update the configurations of a scene, query the scenes of a production studio, query the audio configurations of a scene, start a scene in the production studio, or stop a scene in the production studio.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the episode. You can use the ID as a request parameter in the API operation that is used to delete an episode list from a production studio, add episodes to an episode list, remove episodes from an episode list, query the information about episodes in an episode list, update episodes in an episode list, delete an episode list, query the information about an episode list, start an episode list, or stop an episode list.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf938623****
   */
  episodeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      episodeId: 'EpisodeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
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

