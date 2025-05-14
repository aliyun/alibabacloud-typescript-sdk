// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduleDataAdBreaks extends $dara.Model {
  messageType?: string;
  offsetMillis?: string;
  sourceLocationName?: string;
  sourceName?: string;
  spliceInsertSettings?: string;
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

