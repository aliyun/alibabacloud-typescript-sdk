// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { AudioStream } from "./AudioStream";
import { SubtitleStream } from "./SubtitleStream";
import { VideoStream } from "./VideoStream";


export class DetectMediaMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The addresses.
   * 
   * This parameter is returned only when address information is detected.
   */
  addresses?: Address[];
  /**
   * @remarks
   * The album.
   * 
   * @example
   * unable
   */
  album?: string;
  /**
   * @remarks
   * The album artist.
   * 
   * @example
   * unable
   */
  albumArtist?: string;
  /**
   * @remarks
   * The artist.
   * 
   * @example
   * unable
   */
  artist?: string;
  /**
   * @remarks
   * The audio streams.
   */
  audioStreams?: AudioStream[];
  /**
   * @remarks
   * The bitrate. Unit: bit/s.
   * 
   * @example
   * 13164131
   */
  bitrate?: number;
  /**
   * @remarks
   * The composer.
   * 
   * @example
   * unable
   */
  composer?: string;
  /**
   * @remarks
   * The total duration of the video. Unit: seconds.
   * 
   * @example
   * 15.263000
   */
  duration?: number;
  /**
   * @remarks
   * The full format name.
   * 
   * @example
   * QuickTime / MOV
   */
  formatLongName?: string;
  /**
   * @remarks
   * The abbreviated format name.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * The language of the content. For more information, see the ISO 639-2 Alpha-3 codes for the representation of names of languages.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The coordinate pair of the central point. The coordinate pair consists of latitude and longitude values. This parameter value must be in the "latitude,longitude" format. Valid values of the latitude: [-90,+90]. Valid values of the longitude: [-180,+180].
   * 
   * @example
   * +120.029003,+30.283095
   */
  latLong?: string;
  /**
   * @remarks
   * The performer.
   * 
   * @example
   * unable
   */
  performer?: string;
  /**
   * @remarks
   * The time of recording. For more information about the time formats, see the RFC3339 Nano standard.
   * 
   * @example
   * 2022-04-24T02:39:57Z
   */
  produceTime?: string;
  /**
   * @remarks
   * The number of programs.
   * 
   * @example
   * 2
   */
  programCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2213B1A9-EB3D-4666-84E0-24980BC*****
   */
  requestId?: string;
  /**
   * @remarks
   * The size of the media object. Unit: bytes.
   * 
   * @example
   * 25115517
   */
  size?: number;
  /**
   * @remarks
   * The initial playback time.
   * 
   * @example
   * 0.000000
   */
  startTime?: number;
  /**
   * @remarks
   * The number of media streams.
   * 
   * @example
   * 2
   */
  streamCount?: number;
  /**
   * @remarks
   * The subtitle streams.
   */
  subtitles?: SubtitleStream[];
  /**
   * @remarks
   * The title of the media object.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The video height in pixels.
   * 
   * @example
   * 1920
   */
  videoHeight?: number;
  /**
   * @remarks
   * The video streams.
   */
  videoStreams?: VideoStream[];
  /**
   * @remarks
   * The video width in pixels.
   * 
   * @example
   * 1080
   */
  videoWidth?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      artist: 'Artist',
      audioStreams: 'AudioStreams',
      bitrate: 'Bitrate',
      composer: 'Composer',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      language: 'Language',
      latLong: 'LatLong',
      performer: 'Performer',
      produceTime: 'ProduceTime',
      programCount: 'ProgramCount',
      requestId: 'RequestId',
      size: 'Size',
      startTime: 'StartTime',
      streamCount: 'StreamCount',
      subtitles: 'Subtitles',
      title: 'Title',
      videoHeight: 'VideoHeight',
      videoStreams: 'VideoStreams',
      videoWidth: 'VideoWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      album: 'string',
      albumArtist: 'string',
      artist: 'string',
      audioStreams: { 'type': 'array', 'itemType': AudioStream },
      bitrate: 'number',
      composer: 'string',
      duration: 'number',
      formatLongName: 'string',
      formatName: 'string',
      language: 'string',
      latLong: 'string',
      performer: 'string',
      produceTime: 'string',
      programCount: 'number',
      requestId: 'string',
      size: 'number',
      startTime: 'number',
      streamCount: 'number',
      subtitles: { 'type': 'array', 'itemType': SubtitleStream },
      title: 'string',
      videoHeight: 'number',
      videoStreams: { 'type': 'array', 'itemType': VideoStream },
      videoWidth: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.audioStreams)) {
      $dara.Model.validateArray(this.audioStreams);
    }
    if(Array.isArray(this.subtitles)) {
      $dara.Model.validateArray(this.subtitles);
    }
    if(Array.isArray(this.videoStreams)) {
      $dara.Model.validateArray(this.videoStreams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

