// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystemsFileSystemVswIds extends $dara.Model {
  vswId?: string[];
  static names(): { [key: string]: string } {
    return {
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vswId)) {
      $dara.Model.validateArray(this.vswId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

