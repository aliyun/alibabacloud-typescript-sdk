// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceIdsResponseBodyInstanceIds extends $dara.Model {
  edition?: number;
  instanceId?: string;
  ipMode?: string;
  ipVersion?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      instanceId: 'InstanceId',
      ipMode: 'IpMode',
      ipVersion: 'IpVersion',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      instanceId: 'string',
      ipMode: 'string',
      ipVersion: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceIdsResponseBody extends $dara.Model {
  instanceIds?: DescribeInstanceIdsResponseBodyInstanceIds[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': DescribeInstanceIdsResponseBodyInstanceIds },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

