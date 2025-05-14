// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioTrackSelection extends $dara.Model {
  /**
   * @remarks
   * The track ID from within a source.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  trackId?: number;
  static names(): { [key: string]: string } {
    return {
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trackId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

