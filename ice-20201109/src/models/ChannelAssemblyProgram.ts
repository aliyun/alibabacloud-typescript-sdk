// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelAssemblyProgramAdBreaks extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
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
   * 1000
   */
  offsetMillis?: number;
  /**
   * @remarks
   * The name of the program.
   * 
   * @example
   * program_name
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
   * MyAdSource
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
      channelName: 'ChannelName',
      messageType: 'MessageType',
      offsetMillis: 'OffsetMillis',
      programName: 'ProgramName',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      spliceInsertSettings: 'SpliceInsertSettings',
      timeSignalSettings: 'TimeSignalSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      messageType: 'string',
      offsetMillis: 'number',
      programName: 'string',
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

export class ChannelAssemblyProgram extends $dara.Model {
  /**
   * @remarks
   * The ad breaks.
   */
  adBreaks?: ChannelAssemblyProgramAdBreaks[];
  /**
   * @remarks
   * The ARN of the program.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<userId>:program/myChannel/MyProgram
   */
  arn?: string;
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * Extracts a clip from the source.
   * 
   * @example
   * {StartOffsetMillis: 213123, EndOffsetMillis: 213134}
   */
  clipRange?: string;
  /**
   * @remarks
   * The time when the program was created.
   * 
   * @example
   * 2024-04-02T00:58:19Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the program was last modified.
   * 
   * @example
   * 2024-04-02T00:58:19Z
   */
  gmtModified?: string;
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
  /**
   * @remarks
   * The program transition method.
   * 
   * @example
   * {"Type": "RELATIVE", "RelativePosition": "AFTER_PROGRAM", "RelativeProgram": "program2"}
   */
  transition?: string;
  static names(): { [key: string]: string } {
    return {
      adBreaks: 'AdBreaks',
      arn: 'Arn',
      channelName: 'ChannelName',
      clipRange: 'ClipRange',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      programName: 'ProgramName',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
      transition: 'Transition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adBreaks: { 'type': 'array', 'itemType': ChannelAssemblyProgramAdBreaks },
      arn: 'string',
      channelName: 'string',
      clipRange: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      programName: 'string',
      sourceLocationName: 'string',
      sourceName: 'string',
      sourceType: 'string',
      transition: 'string',
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

