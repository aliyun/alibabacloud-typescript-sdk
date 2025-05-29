// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchForbidVsStreamResponseBodyForbidResultForbidResultInfoChannels extends $dara.Model {
  channel?: string[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

