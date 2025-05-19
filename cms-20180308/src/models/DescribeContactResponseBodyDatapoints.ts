// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContactResponseBodyDatapointsChannels } from "./DescribeContactResponseBodyDatapointsChannels";


export class DescribeContactResponseBodyDatapoints extends $dara.Model {
  channels?: DescribeContactResponseBodyDatapointsChannels;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactResponseBodyDatapointsChannels,
      name: 'string',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

