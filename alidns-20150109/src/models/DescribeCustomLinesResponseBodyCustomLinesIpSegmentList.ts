// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLinesResponseBodyCustomLinesIpSegmentList extends $dara.Model {
  endIp?: string;
  startIp?: string;
  static names(): { [key: string]: string } {
    return {
      endIp: 'EndIp',
      startIp: 'StartIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIp: 'string',
      startIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

