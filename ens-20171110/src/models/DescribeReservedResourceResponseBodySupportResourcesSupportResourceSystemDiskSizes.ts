// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedResourceResponseBodySupportResourcesSupportResourceSystemDiskSizes extends $dara.Model {
  systemDiskSize?: string[];
  static names(): { [key: string]: string } {
    return {
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.systemDiskSize)) {
      $dara.Model.validateArray(this.systemDiskSize);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

