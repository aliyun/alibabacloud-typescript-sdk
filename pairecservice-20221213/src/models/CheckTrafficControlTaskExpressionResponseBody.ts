// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTrafficControlTaskExpressionResponseBody extends $dara.Model {
  isValie?: boolean;
  reason?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isValie: 'IsValie',
      reason: 'Reason',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValie: 'boolean',
      reason: 'string',
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

