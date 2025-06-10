// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeedbackSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 01E1BC28-9155-59F0-BA7E-3706170DEF1B
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

