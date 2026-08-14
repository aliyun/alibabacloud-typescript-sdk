// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackSourceCidrResponseBody extends $dara.Model {
  cidrs?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'Cidrs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cidrs)) {
      $dara.Model.validateArray(this.cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

