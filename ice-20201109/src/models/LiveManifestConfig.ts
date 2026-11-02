// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LiveManifestConfig extends $dara.Model {
  /**
   * @remarks
   * The ad markers supported in the playlist. Valid values:
   * - NONE: removes ad markers.
   * - DATE_RANGE: uses the EXT-X-DATERANGE marker in the HLS specification. Available when the endpoint protocol is HLS or HLS_CMAF.
   * - XML: uses XML ad markers in the DASH specification. Available when the endpoint protocol is DASH.
   * 
   * @example
   * NONE
   */
  adMarkers?: string;
  /**
   * @remarks
   * The interval at which the EXT-X-PROGRAM-DATE-TIME time tag is inserted, in seconds. By default, no tag is inserted. Valid values: 1 to 3600. Applicable to the HLS and HLS_CMAF protocols.
   * 
   * @example
   * 5
   */
  dateTimeInterval?: number;
  /**
   * @remarks
   * The maximum time-shift duration during live streaming, in seconds. Valid values: 1 to 3600. Default value: 60. Applicable to DASH.
   * 
   * @example
   * 60
   */
  manifestDuration?: number;
  /**
   * @remarks
   * The maximum input bitrate threshold, in bit/s. The video track must have a bitrate less than or equal to this threshold to be played from this endpoint. Valid values: integers greater than 0. Default value: empty, which indicates that no maximum bitrate is set.
   * 
   * @example
   * 8000000
   */
  maxVideoBitrate?: number;
  /**
   * @remarks
   * The minimum buffer time, in seconds. Valid values: 1 to 30. Default value: the duration of two segments. Applicable only to DASH. Note: A small minimum buffer time may cause stuttering during playback. Set this value to no less than the duration of two segments.
   * 
   * @example
   * 8
   */
  minBufferTime?: number;
  /**
   * @remarks
   * The minimum update interval, in seconds. Valid values: 1 to 3600. Default value: the duration of two segments. Applicable to DASH. Note: Set this parameter to a value less than the minimum buffer time. A large value may cause stuttering during DASH playback.
   * 
   * @example
   * 8
   */
  minUpdatePeriod?: number;
  /**
   * @remarks
   * The minimum input bitrate threshold, in bit/s. The video track must have a bitrate greater than or equal to this threshold to be played from this endpoint. Valid values: integers greater than 0. Default value: empty, which indicates that no minimum bitrate is set.
   * 
   * @example
   * 1000000
   */
  minVideoBitrate?: number;
  /**
   * @remarks
   * The part segment cache duration, in milliseconds. The minimum value is twice the PartDurationMs, and the maximum value is three times the SegmentDuration. Applicable only to LL_HLS_CMAF.
   * 
   * @example
   * 1100
   */
  partHoldBackMs?: number;
  /**
   * @remarks
   * The recommended playback start delay, in seconds. Valid values: 1 to 60. Default value: the duration of three segments.
   * 
   * @example
   * 12
   */
  presentationDelay?: number;
  /**
   * @remarks
   * The number of segments. Applicable to the HLS and HLS_CMAF protocols. By default, the configuration of the channel is used. Valid values: 2 to 100.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment template. Currently, only NUMBER_TIMELINE is supported. Default value: NUMBER_TIMELINE. Applicable to DASH.
   * 
   * @example
   * NUMBER_TIMELINE
   */
  segmentTemplateFormat?: string;
  /**
   * @remarks
   * The stream sorting rule. Valid values:
   * - ORIGINAL: keeps the sorting of the input sub-playlists.
   * - VIDEO_BITRATE_ASCENDING: sorts video streams in ascending order of bitrate.
   * - VIDEO_BITRATE_DESCENDING: sorts video streams in descending order of bitrate.
   * 
   * @example
   * ORIGINAL
   */
  streamOrder?: string;
  static names(): { [key: string]: string } {
    return {
      adMarkers: 'AdMarkers',
      dateTimeInterval: 'DateTimeInterval',
      manifestDuration: 'ManifestDuration',
      maxVideoBitrate: 'MaxVideoBitrate',
      minBufferTime: 'MinBufferTime',
      minUpdatePeriod: 'MinUpdatePeriod',
      minVideoBitrate: 'MinVideoBitrate',
      partHoldBackMs: 'PartHoldBackMs',
      presentationDelay: 'PresentationDelay',
      segmentCount: 'SegmentCount',
      segmentTemplateFormat: 'SegmentTemplateFormat',
      streamOrder: 'StreamOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adMarkers: 'string',
      dateTimeInterval: 'number',
      manifestDuration: 'number',
      maxVideoBitrate: 'number',
      minBufferTime: 'number',
      minUpdatePeriod: 'number',
      minVideoBitrate: 'number',
      partHoldBackMs: 'number',
      presentationDelay: 'number',
      segmentCount: 'number',
      segmentTemplateFormat: 'string',
      streamOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

