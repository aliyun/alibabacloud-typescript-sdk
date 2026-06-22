// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Transcript extends $dara.Model {
  content?: string;
  speakerId?: string;
  timeRange?: number[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      speakerId: 'SpeakerId',
      timeRange: 'TimeRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      speakerId: 'string',
      timeRange: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timeRange)) {
      $dara.Model.validateArray(this.timeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

