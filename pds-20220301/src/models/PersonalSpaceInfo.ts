// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PersonalSpaceInfo extends $dara.Model {
  totalSize?: number;
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalSize: 'total_size',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalSize: 'number',
      usedSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

