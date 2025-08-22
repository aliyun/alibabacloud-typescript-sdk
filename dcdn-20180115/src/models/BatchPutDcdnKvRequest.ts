// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutDcdnKvRequestKvList extends $dara.Model {
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

export class BatchPutDcdnKvRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kvList?: BatchPutDcdnKvRequestKvList[];
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
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
      kvList: { 'type': 'array', 'itemType': BatchPutDcdnKvRequestKvList },
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

