// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsAuthStatusResponseBody extends $dara.Model {
  requestId?: string;
  slsAuthStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsAuthStatus: 'SlsAuthStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsAuthStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

