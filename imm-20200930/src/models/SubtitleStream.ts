// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubtitleStream extends $dara.Model {
  bitrate?: number;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  content?: string;
  duration?: number;
  height?: number;
  index?: number;
  language?: string;
  startTime?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      content: 'Content',
      duration: 'Duration',
      height: 'Height',
      index: 'Index',
      language: 'Language',
      startTime: 'StartTime',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      content: 'string',
      duration: 'number',
      height: 'number',
      index: 'number',
      language: 'string',
      startTime: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

