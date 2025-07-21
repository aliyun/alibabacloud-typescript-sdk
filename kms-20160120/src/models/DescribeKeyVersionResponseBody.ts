// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyVersionResponseBodyKeyVersion extends $dara.Model {
  /**
   * @remarks
   * The date and time when the CMK version was created. The time is displayed in UTC.
   * 
   * @example
   * 2016-03-25T10:42:40Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter in the request to an alias of the CMK, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK version.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
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

export class DescribeKeyVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of the CMK version.
   */
  keyVersion?: DescribeKeyVersionResponseBodyKeyVersion;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7021b6ec-4be7-4d3c-8a68-1e85d4d515a0
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
      keyVersion: DescribeKeyVersionResponseBodyKeyVersion,
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

