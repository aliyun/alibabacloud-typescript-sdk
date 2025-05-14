// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChannelAssemblyScheduleDataAdBreaks } from "./ChannelAssemblyScheduleDataAdBreaks";


export class ChannelAssemblyScheduleData extends $dara.Model {
  adBreaks?: ChannelAssemblyScheduleDataAdBreaks[];
  approximateDurationSeconds?: number;
  approximateStartTime?: string;
  entryType?: string;
  programName?: string;
  sourceLocationName?: string;
  sourceName?: string;
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

