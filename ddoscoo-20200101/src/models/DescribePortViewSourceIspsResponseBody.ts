// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortViewSourceIspsResponseBodyIsps extends $dara.Model {
  count?: number;
  ispId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ispId: 'IspId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ispId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortViewSourceIspsResponseBody extends $dara.Model {
  isps?: DescribePortViewSourceIspsResponseBodyIsps[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribePortViewSourceIspsResponseBodyIsps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.isps)) {
      $dara.Model.validateArray(this.isps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

