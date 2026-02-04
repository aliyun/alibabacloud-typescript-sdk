// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetTairKVCacheCustomInstancePasswordResponseBody extends $dara.Model {
  /**
   * @example
   * AD425AD3-CC7B-4EE2-A5CB-2F61BA73****
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

