// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreKeysResponseBodyLogStoreKeys extends $dara.Model {
  logStoreKey?: string[];
  static names(): { [key: string]: string } {
    return {
      logStoreKey: 'LogStoreKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.logStoreKey)) {
      $dara.Model.validateArray(this.logStoreKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried log keywords.
   */
  logStoreKeys?: DescribeLogStoreKeysResponseBodyLogStoreKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3BB185E9-BB54-1727-B876-13243E4C0EB5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logStoreKeys: 'LogStoreKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreKeys: DescribeLogStoreKeysResponseBodyLogStoreKeys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logStoreKeys && typeof (this.logStoreKeys as any).validate === 'function') {
      (this.logStoreKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

