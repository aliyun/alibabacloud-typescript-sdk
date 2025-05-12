// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailAudioCensorResultAudioDetailResultListAudioDetailResult extends $dara.Model {
  endTime?: number;
  label?: string;
  startTime?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      label: 'Label',
      startTime: 'StartTime',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      label: 'string',
      startTime: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

