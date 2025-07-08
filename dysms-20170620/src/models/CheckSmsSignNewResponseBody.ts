// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSmsSignNewResponseBody extends $dara.Model {
  common?: boolean;
  requestId?: string;
  verification?: boolean;
  static names(): { [key: string]: string } {
    return {
      common: 'Common',
      requestId: 'RequestId',
      verification: 'Verification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      common: 'boolean',
      requestId: 'string',
      verification: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

