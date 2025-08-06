// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisplayAIAuditSwitchResponseBody extends $dara.Model {
  isDisplay?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isDisplay: 'IsDisplay',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDisplay: 'boolean',
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

