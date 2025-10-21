// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotUpdateJobFailureInfo extends $dara.Model {
  failureSeverity?: string;
  message?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      failureSeverity: 'failureSeverity',
      message: 'message',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureSeverity: 'string',
      message: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

