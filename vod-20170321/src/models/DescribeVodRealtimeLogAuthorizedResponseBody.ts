// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodRealtimeLogAuthorizedResponseBody extends $dara.Model {
  authorizedStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedStatus: 'AuthorizedStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

