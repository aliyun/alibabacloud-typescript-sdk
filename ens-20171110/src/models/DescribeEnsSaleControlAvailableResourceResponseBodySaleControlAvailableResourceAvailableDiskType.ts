// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableDiskType extends $dara.Model {
  diskName?: string;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskName: 'DiskName',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskName: 'string',
      diskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

