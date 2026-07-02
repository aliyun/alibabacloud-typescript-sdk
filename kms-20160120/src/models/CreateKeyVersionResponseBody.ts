// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKeyVersionResponseBodyKeyVersion extends $dara.Model {
  /**
   * @remarks
   * The date and time when the version was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-07-02T10:38:27Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * key-hzz62f1cb66fa42qo****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * key-hzz62f1cb66fa42qo****-20v29b****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the version.
   */
  keyVersion?: CreateKeyVersionResponseBodyKeyVersion;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * b96f250a-4b75-498c-91be-22c6928f85be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: CreateKeyVersionResponseBodyKeyVersion,
      requestId: 'string',
    };
  }

  validate() {
    if(this.keyVersion && typeof (this.keyVersion as any).validate === 'function') {
      (this.keyVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

