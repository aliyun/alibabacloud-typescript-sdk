// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel } from "./DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel";


export class DescribeConsumerGroupResponseBodyConsumerChannels extends $dara.Model {
  describeConsumerChannel?: DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel[];
  static names(): { [key: string]: string } {
    return {
      describeConsumerChannel: 'DescribeConsumerChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describeConsumerChannel: { 'type': 'array', 'itemType': DescribeConsumerGroupResponseBodyConsumerChannelsDescribeConsumerChannel },
    };
  }

  validate() {
    if(Array.isArray(this.describeConsumerChannel)) {
      $dara.Model.validateArray(this.describeConsumerChannel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

