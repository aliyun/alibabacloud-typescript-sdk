// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOrgResponseBody extends $dara.Model {
  /**
   * @example
   * 0296EDF8-3C8A-5128-8682-27B29C99****
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

