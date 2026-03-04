// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelAssemblyScheduleDataAdBreaks extends $dara.Model {
  /**
   * @remarks
   * The SCTE-35 message type.
   * 
   * @example
   * SPLICE_INSERT
   */
  messageType?: string;
  /**
   * @remarks
   * The position to insert the ad marker, as an offset relative to the beginning of the program. Unit: milliseconds.
   * 
   * @example
   * 100000
   */
  offsetMillis?: string;
  /**
   * @remarks
   * The name of the source location.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  /**
   * @remarks
   * The name of the source.
   * 
   * @example
   * MySource
   */
  sourceName?: string;
  /**
   * @remarks
   * The SpliceInsert configurations.
   * 
   * @example
   * {"AvailNumber":0,"AvailExpected":0,"SpliceEventID":1,"UniqueProgramID":0}
   */
  spliceInsertSettings?: string;
  /**
   * @remarks
   * The TimeSignal configurations.
   * 
   * @example
   * {"segmentationEventID":0,"segmentationUPIDType":14,"segmentationUPID":"upid","segmentationTypeID":48,"segmentNumber":0,"segmentsExpected":0,"subSegmentNumber":1,"subSegmentsExpected":0}
   */
  timeSignalSettings?: string;
  static names(): { [key: string]: string } {
    return {
      messageType: 'MessageType',
      offsetMillis: 'OffsetMillis',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      spliceInsertSettings: 'SpliceInsertSettings',
      timeSignalSettings: 'TimeSignalSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageType: 'string',
      offsetMillis: 'string',
      sourceLocationName: 'string',
      sourceName: 'string',
      spliceInsertSettings: 'string',
      timeSignalSettings: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChannelAssemblyScheduleData extends $dara.Model {
  /**
   * @remarks
   * The information about ad breaks.
   */
  adBreaks?: ChannelAssemblyScheduleDataAdBreaks[];
  /**
   * @remarks
   * The scheduled playback duration.
   * 
   * @example
   * 100000
   */
  approximateDurationSeconds?: number;
  /**
   * @remarks
   * The scheduled start time.
   * 
   * @example
   * 1989128002313
   */
  approximateStartTime?: string;
  /**
   * @remarks
   * The entry type.
   * 
   * @example
   * program
   */
  entryType?: string;
  /**
   * @remarks
   * The name of the program.
   * 
   * @example
   * program1
   */
  programName?: string;
  /**
   * @remarks
   * The name of the source location.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  /**
   * @remarks
   * The name of the source.
   * 
   * @example
   * MySource
   */
  sourceName?: string;
  /**
   * @remarks
   * The source type. Valid values: vodSource and liveSource.
   * 
   * @example
   * vodSource
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      adBreaks: 'AdBreaks',
      approximateDurationSeconds: 'ApproximateDurationSeconds',
      approximateStartTime: 'ApproximateStartTime',
      entryType: 'EntryType',
      programName: 'ProgramName',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adBreaks: { 'type': 'array', 'itemType': ChannelAssemblyScheduleDataAdBreaks },
      approximateDurationSeconds: 'number',
      approximateStartTime: 'string',
      entryType: 'string',
      programName: 'string',
      sourceLocationName: 'string',
      sourceName: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adBreaks)) {
      $dara.Model.validateArray(this.adBreaks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

