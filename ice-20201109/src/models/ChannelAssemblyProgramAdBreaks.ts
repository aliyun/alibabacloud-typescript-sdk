// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelAssemblyProgramAdBreaks extends $dara.Model {
  channelName?: string;
  messageType?: string;
  offsetMillis?: number;
  programName?: string;
  sourceLocationName?: string;
  sourceName?: string;
  spliceInsertSettings?: string;
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

