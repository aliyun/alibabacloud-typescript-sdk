// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesClusterUsedStorage extends $dara.Model {
  clusterId?: string;
  usedStorage?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      usedStorage: 'UsedStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      usedStorage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

