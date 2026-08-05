// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterEpisodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. You can use this ID to perform operations on the scenario. These operations include copying, updating, querying, starting, and stopping the scenario. You can also use the ID to query the audio configuration of the scenario.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the episode. You can use this ID to manage the episode list and its items. For the episode list, you can perform operations such as query, edit, delete, start, and stop. For episode items, you can perform operations such as create, add, delete, and query.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf938623****
   */
  episodeId?: string;
  /**
   * @remarks
   * The ID of the request.
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

