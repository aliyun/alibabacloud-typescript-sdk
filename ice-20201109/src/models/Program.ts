// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProgramAdBreaks extends $dara.Model {
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

export class Program extends $dara.Model {
  adBreaks?: ProgramAdBreaks[];
  arn?: string;
  channelName?: string;
  clipRange?: string;
  gmtCreate?: string;
  gmtModified?: string;
  programName?: string;
  sourceLocationName?: string;
  sourceName?: string;
  sourceType?: string;
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
      adBreaks: { 'type': 'array', 'itemType': ProgramAdBreaks },
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

