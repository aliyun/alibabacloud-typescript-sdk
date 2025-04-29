// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType } from "./DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType";


export class DescribeDisksFullStatusResponseBodyDiskFullStatusSet extends $dara.Model {
  diskFullStatusType?: DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType[];
  static names(): { [key: string]: string } {
    return {
      diskFullStatusType: 'DiskFullStatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskFullStatusType: { 'type': 'array', 'itemType': DescribeDisksFullStatusResponseBodyDiskFullStatusSetDiskFullStatusType },
    };
  }

  validate() {
    if(Array.isArray(this.diskFullStatusType)) {
      $dara.Model.validateArray(this.diskFullStatusType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

