// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReservedResourceResponseBodySupportResourcesSupportResourceDataDiskSizes extends $dara.Model {
  dataDiskSize?: string[];
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataDiskSize)) {
      $dara.Model.validateArray(this.dataDiskSize);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

