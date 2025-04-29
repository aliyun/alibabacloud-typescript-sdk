// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType } from "./DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType";


export class DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSet extends $dara.Model {
  diskEventType?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType[];
  static names(): { [key: string]: string } {
    return {
      diskEventType: 'DiskEventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEventType: { 'type': 'array', 'itemType': DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusTypeDiskEventSetDiskEventType },
    };
  }

  validate() {
    if(Array.isArray(this.diskEventType)) {
      $dara.Model.validateArray(this.diskEventType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

