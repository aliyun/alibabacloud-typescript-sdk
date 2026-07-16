// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { AudioStream } from "./AudioStream";
import { SubtitleStream } from "./SubtitleStream";
import { VideoStream } from "./VideoStream";


export class DetectMediaMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The geolocation detection results of the video.
   * 
   * This parameter has a value only when the video contains geolocation information.
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
   * The array of audio streams.
   */
  audioStreams?: AudioStream[];
  /**
   * @remarks
   * The bitrate of the media file, in bit/s.
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
   * The total duration of the video, in seconds.
   * 
   * @example
   * 15.263000
   */
  duration?: number;
  /**
   * @remarks
   * The full name of the format.
   * 
   * @example
   * QuickTime / MOV
   */
  formatLongName?: string;
  /**
   * @remarks
   * The format name.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * The language used in the video. The value follows the ISO 639-2 standard.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The central geographic coordinate point, which is a latitude and longitude value.
   * The format is latitude,longitude, with latitude first and longitude second. The latitude range is [-90,+90] and the longitude range is [-180,+180]. Example: 35.8,-45.91.
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
   * The time when the video was recorded. The value follows the RFC 3339 Nano standard.
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
   * The size of the media file, in bytes.
   * 
   * @example
   * 25115517
   */
  size?: number;
  /**
   * @remarks
   * The start playback time of the media, in seconds.
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
   * The array of subtitle streams.
   */
  subtitles?: SubtitleStream[];
  /**
   * @remarks
   * The title of the media file.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The height of the video frame in the media file, in pixels.
   * 
   * @example
   * 1920
   */
  videoHeight?: number;
  /**
   * @remarks
   * The array of video streams.
   */
  videoStreams?: VideoStream[];
  /**
   * @remarks
   * The width of the video frame in the media file, in pixels.
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

