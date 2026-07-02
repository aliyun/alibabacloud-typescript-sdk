// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceMultiVIPResponseBody extends $dara.Model {
  /**
   * @example
   * 52D901ED-E0A5-42FB-B9DB-39C295C3****
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

