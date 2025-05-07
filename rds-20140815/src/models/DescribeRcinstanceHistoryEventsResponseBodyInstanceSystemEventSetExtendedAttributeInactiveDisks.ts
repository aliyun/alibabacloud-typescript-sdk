// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks extends $dara.Model {
  creationTime?: string;
  deviceCategory?: string;
  deviceSize?: string;
  deviceType?: string;
  releaseTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      deviceCategory: 'DeviceCategory',
      deviceSize: 'DeviceSize',
      deviceType: 'DeviceType',
      releaseTime: 'ReleaseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      deviceCategory: 'string',
      deviceSize: 'string',
      deviceType: 'string',
      releaseTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

