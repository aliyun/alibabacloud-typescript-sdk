// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContactResponseBodyDatapointsChannelsChannel } from "./DescribeContactResponseBodyDatapointsChannelsChannel";


export class DescribeContactResponseBodyDatapointsChannels extends $dara.Model {
  channel?: DescribeContactResponseBodyDatapointsChannelsChannel[];
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': DescribeContactResponseBodyDatapointsChannelsChannel },
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

