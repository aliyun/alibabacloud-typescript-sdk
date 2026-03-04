// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LiveManifestConfig extends $dara.Model {
  /**
   * @remarks
   * The type of ad markers to include in the manifest.
   * 
   * *   NONE: Removes all ad markers.
   * *   DATE_RANGE: Inserts EXT-X-DATERANGE tags (HLS spec). Valid for HLS/HLS-CMAF endpoints.
   * *   XML: Inserts XML-based ad markers (DASH spec). Valid for DASH endpoints.
   * 
   * @example
   * NONE
   */
  adMarkers?: string;
  /**
   * @remarks
   * The interval, in seconds, at which to insert the EXT-X-PROGRAM-DATE-TIME tag into the playlist. By default, no tags are inserted. Valid values: 1 to 3600. Applies only to HLS and HLS-CMAF endpoints.
   * 
   * @example
   * 5
   */
  dateTimeInterval?: number;
  /**
   * @remarks
   * The duration of the startover window, in seconds. It defines the maximum time a viewer can seek backward in the live stream. Valid values: 1 to 3600. Default value: 60. Applies only to DASH endpoints.
   * 
   * @example
   * 60
   */
  manifestDuration?: number;
  /**
   * @remarks
   * The maximum bitrate threshold (in bits per second) that video tracks must be at or below to be available for playback from this endpoint. It must be a positive integer. If not set, no maximum bitrate is enforced.
   * 
   * @example
   * 8000000
   */
  maxVideoBitrate?: number;
  /**
   * @remarks
   * The minimum buffer time, in seconds. Valid values: 1 to 30. Default value: the duration of two segments. Applies only to DASH endpoints.
   * 
   * Note: Setting this value too low may cause playback to stutter. We recommend a value no less than two segment durations.
   * 
   * @example
   * 8
   */
  minBufferTime?: number;
  /**
   * @remarks
   * The minimum update period for the manifest, in seconds. Valid values: 1 to 3600. Default value: the duration of two segments. Applies only to DASH endpoints.
   * 
   * Note: For smooth playback, set this value to be less than MinBufferTime.
   * 
   * @example
   * 8
   */
  minUpdatePeriod?: number;
  /**
   * @remarks
   * The minimum bitrate threshold (in bits per second) that video tracks must be at or above to be available for playback from this endpoint. It must be a positive integer. If not set, no minimum bitrate is enforced.
   * 
   * @example
   * 1000000
   */
  minVideoBitrate?: number;
  /**
   * @remarks
   * The suggested presentation delay, in seconds. Valid values: 1 to 60. Default value: the duration of three segments.
   * 
   * @example
   * 12
   */
  presentationDelay?: number;
  /**
   * @remarks
   * The number of segments to include in the playlist. Applies to HLS and HLS-CMAF protocols. If not set, the channel\\"s default configuration is used. Valid values: 2 to 100.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The format of the segment template. Only NUMBER_TIMELINE is supported (default). Applies only to DASH endpoints.
   * 
   * @example
   * NUMBER_TIMELINE
   */
  segmentTemplateFormat?: string;
  /**
   * @remarks
   * The order of streams in the master playlist. Valid values:
   * 
   * *   ORIGINAL: Preserves the original order of the input streams.
   * *   VIDEO_BITRATE_ASCENDING: sorts the streams in ascending order of bitrates, from lowest to highest.
   * *   VIDEO_BITRATE_DESCENDING: sorts the streams in descending order of bitrates, from highest to lowest.
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

