// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAccessLogStatusResponseBody extends $dara.Model {
  requestId?: string;
  slsLogstore?: string;
  slsProject?: string;
  slsStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsLogstore: 'SlsLogstore',
      slsProject: 'SlsProject',
      slsStatus: 'SlsStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsLogstore: 'string',
      slsProject: 'string',
      slsStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

