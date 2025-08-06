// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlockVodObjectCachesResponseBody extends $dara.Model {
  blockTaskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      blockTaskId: 'BlockTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTaskId: 'string',
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

