// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActionEventPolicyResponseBody extends $dara.Model {
  enableEventLog?: string;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enableEventLog: 'EnableEventLog',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventLog: 'string',
      regionId: 'string',
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

