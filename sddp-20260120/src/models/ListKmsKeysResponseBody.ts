// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKmsKeysResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The alias of the KMS key.
   * 
   * @example
   * alias/dsc-encryption
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      keyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of records returned by this query.
   */
  items?: ListKmsKeysResponseBodyItems[];
  /**
   * @remarks
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListKmsKeysResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

