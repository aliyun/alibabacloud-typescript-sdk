// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceIdsResponseBodyInstanceIds } from "./DescribeInstanceIdsResponseBodyInstanceIds";


export class DescribeInstanceIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID, type, description, and IP version of the instance.
   */
  instanceIds?: DescribeInstanceIdsResponseBodyInstanceIds[];
  /**
   * @example
   * 310A41FD-0990-5610-92E0-A6A55D7C6444
   */
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

