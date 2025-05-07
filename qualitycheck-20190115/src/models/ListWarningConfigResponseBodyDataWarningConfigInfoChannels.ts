// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel } from "./ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel";


export class ListWarningConfigResponseBodyDataWarningConfigInfoChannels extends $dara.Model {
  channel?: ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': ListWarningConfigResponseBodyDataWarningConfigInfoChannelsChannel },
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

