// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNCInformationResponseBodyDataInfo extends $dara.Model {
  ip?: string;
  name?: string;
  tag?: string[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      name: 'Name',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': 'string' },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

