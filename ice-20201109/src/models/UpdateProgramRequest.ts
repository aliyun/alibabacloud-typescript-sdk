// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProgramRequest extends $dara.Model {
  /**
   * @remarks
   * The ad break information.
   * 
   * @example
   * [{"MessageType":"SPLICE_INSERT","OffsetMillis":1000,"SourceLocationName":"MySourceLocation","SourceName":"MyAdSource","SpliceInsertSettings":{"AvailNumber":0,"AvailExpected":0,"SpliceEventID":1,"UniqueProgramID":0}}]
   */
  adBreaks?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The clip range information.
   * 
   * @example
   * {StartOffsetMillis: 213123, EndOffsetMillis: 213134}
   */
  clipRange?: string;
  /**
   * @remarks
   * The program name.
   * 
   * This parameter is required.
   * 
   * @example
   * program1
   */
  programName?: string;
  /**
   * @remarks
   * The source location name.
   * 
   * @example
   * MySourceLcation
   */
  sourceLocationName?: string;
  /**
   * @remarks
   * The source name.
   * 
   * @example
   * MySource
   */
  sourceName?: string;
  /**
   * @remarks
   * The source type of the program.
   * 
   * @example
   * vodSource
   */
  sourceType?: string;
  /**
   * @remarks
   * The program transition information.
   * 
   * @example
   * {"Type": "RELATIVE", "RelativePosition": "AFTER_PROGRAM", "RelativeProgram": "program2"}
   */
  transition?: string;
  static names(): { [key: string]: string } {
    return {
      adBreaks: 'AdBreaks',
      channelName: 'ChannelName',
      clipRange: 'ClipRange',
      programName: 'ProgramName',
      sourceLocationName: 'SourceLocationName',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
      transition: 'Transition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adBreaks: 'string',
      channelName: 'string',
      clipRange: 'string',
      programName: 'string',
      sourceLocationName: 'string',
      sourceName: 'string',
      sourceType: 'string',
      transition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

