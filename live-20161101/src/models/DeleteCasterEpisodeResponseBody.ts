// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterEpisodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. You can specify the ID as a parameter in the request to modify the episode in the production studio.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the episode. You can specify the ID as a parameter in the request to modify the episode in the production studio.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf932738****
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

