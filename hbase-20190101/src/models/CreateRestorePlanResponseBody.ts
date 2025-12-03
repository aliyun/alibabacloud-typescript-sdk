// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestorePlanResponseBody extends $dara.Model {
  /**
   * @example
   * A0598673-EB6E-4F6D-9961-E0F2012090C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

