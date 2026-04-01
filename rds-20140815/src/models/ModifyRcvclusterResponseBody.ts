// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRCVClusterResponseBody extends $dara.Model {
  /**
   * @example
   * 2553A660-E4EB-4AF4-A402-8AFF70A49143
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

