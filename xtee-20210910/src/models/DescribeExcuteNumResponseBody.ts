// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcuteNumResponseBody extends $dara.Model {
  categories?: string[];
  data?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

