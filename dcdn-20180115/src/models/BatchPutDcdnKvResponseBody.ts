// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutDcdnKvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The keys that failed to be written.
   */
  failKeys?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  /**
   * @remarks
   * The keys that were written.
   */
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

