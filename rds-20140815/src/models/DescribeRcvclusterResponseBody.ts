// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCVClusterResponseBody extends $dara.Model {
  requestId?: string;
  VClusterStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VClusterStatus: 'VClusterStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VClusterStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

