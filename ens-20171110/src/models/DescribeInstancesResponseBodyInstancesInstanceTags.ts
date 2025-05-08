// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceTagsTags } from "./DescribeInstancesResponseBodyInstancesInstanceTagsTags";


export class DescribeInstancesResponseBodyInstancesInstanceTags extends $dara.Model {
  tags?: DescribeInstancesResponseBodyInstancesInstanceTagsTags[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceTagsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

