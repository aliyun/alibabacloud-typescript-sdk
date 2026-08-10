// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LiveManifestConfig extends $dara.Model {
  /**
   * @remarks
   * The ad markers supported in the playlist. Valid values:
   * - NONE: removes ad markers.
   * - DATE_RANGE: uses the EXT-X-DATERANGE tag defined in the HLS specification. This value is available when the endpoint protocol is HLS/HLS_CMAF.
   * - XML: uses the XML ad markers defined in the DASH specification. This value is available when the endpoint protocol is DASH.
   * 
   * @example
   * NONE
   */
  adMarkers?: string;
  /**
   * @remarks
   * The interval (in seconds) for inserting the EXT-X-PROGRAM-DATE-TIME time tag. By default, the tag is not inserted. Valid values: 1 to 3600. This parameter applies to the HLS/HLS_CMAF protocol.
   * 
   * @example
   * 5
   */
  dateTimeInterval?: number;
  /**
   * @remarks
   * The maximum time-shift duration during live streaming. Unit: seconds. Valid values: 1 to 3600. Default value: 60. This parameter applies to DASH.
   * 
   * @example
   * 60
   */
  manifestDuration?: number;
  /**
   * @remarks
   * The maximum input bitrate threshold (unit: bit/s). A video track must have a bitrate less than or equal to this threshold to be played from this endpoint. Valid values: integers greater than 0. By default, this parameter is empty and no maximum bitrate limit is set.
   * 
   * @example
   * 8000000
   */
  maxVideoBitrate?: number;
  /**
   * @remarks
   * The minimum buffer time. Unit: seconds. Valid values: 1 to 30. Default value: 2 segment durations. This parameter applies only to DASH.
   * 
   * >  An excessively small minimum buffer time may cause playback stuttering. Set this parameter to a value no less than 2 segment durations.
   * 
   * @example
   * 8
   */
  minBufferTime?: number;
  /**
   * @remarks
   * The minimum update interval. Unit: seconds. Valid values: 1 to 3600. Default value: 2 segment durations. This parameter applies to DASH.
   * 
   * >  Set this parameter to a value less than the minimum buffer time. An excessively large value may cause DASH playback stuttering.
   * 
   * @example
   * 8
   */
  minUpdatePeriod?: number;
  /**
   * @remarks
   * The minimum input bitrate threshold (unit: bit/s). A video track must have a bitrate greater than or equal to this threshold to be played from this endpoint. Valid values: integers greater than 0. By default, this parameter is empty and no minimum bitrate is set.
   * 
   * @example
   * 1000000
   */
  minVideoBitrate?: number;
  partHoldBackMs?: number;
  /**
   * @remarks
   * The suggested presentation delay. Unit: seconds. Valid values: 1 to 60. Default value: 3 segment durations.
   * 
   * @example
   * 12
   */
  presentationDelay?: number;
  /**
   * @remarks
   * The number of segments. This parameter applies to the HLS/HLS_CMAF protocol. By default, the channel configuration is used. Valid values: 2 to 100.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment template. Currently, only NUMBER_TIMELINE (default) is supported. This parameter applies to DASH.
   * 
   * @example
   * NUMBER_TIMELINE
   */
  segmentTemplateFormat?: string;
  /**
   * @remarks
   * The stream sorting rule. Valid values:
   * - ORIGINAL: retains the original order of the input sub-manifest.
   * - VIDEO_BITRATE_ASCENDING: sorts by video stream bitrate in ascending order.
   * - VIDEO_BITRATE_DESCENDING: sorts by video stream bitrate in descending order.
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

