// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUIAccountPasswordResponseBody extends $dara.Model {
  /**
   * @example
   * BED4ADEB-4EA9-507E-892C-84112D6AC7C1
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

