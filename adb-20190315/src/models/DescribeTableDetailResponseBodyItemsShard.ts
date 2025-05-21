// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableDetailResponseBodyItemsShard extends $dara.Model {
  id?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

