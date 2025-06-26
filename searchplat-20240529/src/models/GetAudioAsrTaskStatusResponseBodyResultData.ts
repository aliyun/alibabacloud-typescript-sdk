// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioAsrTaskStatusResponseBodyResultData extends $dara.Model {
  end?: number;
  start?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
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

