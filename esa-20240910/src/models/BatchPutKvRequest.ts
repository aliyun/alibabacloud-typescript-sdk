// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvRequestKvList extends $dara.Model {
  expiration?: number;
  expirationTtl?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiration: 'number',
      expirationTtl: 'number',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kvList?: BatchPutKvRequestKvList[];
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      kvList: 'KvList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvList: { 'type': 'array', 'itemType': BatchPutKvRequestKvList },
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kvList)) {
      $dara.Model.validateArray(this.kvList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

