// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 42FE70D8-4336-471B-8314-CCCFCE41****
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

