// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInsightResponseBody extends $dara.Model {
  /**
   * @example
   * 4ABAEA6E-C740-5CE2-A003-643E5519****
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

