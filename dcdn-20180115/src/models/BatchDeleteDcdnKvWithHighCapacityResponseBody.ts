// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDcdnKvWithHighCapacityResponseBody extends $dara.Model {
  failKeys?: string[];
  /**
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  successKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      failKeys: 'FailKeys',
      requestId: 'RequestId',
      successKeys: 'SuccessKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failKeys: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      successKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failKeys)) {
      $dara.Model.validateArray(this.failKeys);
    }
    if(Array.isArray(this.successKeys)) {
      $dara.Model.validateArray(this.successKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

