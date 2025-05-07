// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCImageListResponseBodyImagesDiskDeviceMappings extends $dara.Model {
  device?: string;
  size?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      size: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

