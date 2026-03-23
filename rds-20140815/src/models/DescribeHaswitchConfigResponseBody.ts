// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHASwitchConfigResponseBody extends $dara.Model {
  HAConfig?: string;
  manualHATime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      HAConfig: 'HAConfig',
      manualHATime: 'ManualHATime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAConfig: 'string',
      manualHATime: 'string',
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

