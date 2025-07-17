// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateResponseBodyCertificate extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate file was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1730217600000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the certificate file.
   * 
   * @example
   * 1107550004253538
   */
  createUser?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a file
   */
  description?: string;
  /**
   * @remarks
   * The size of the certificate file, in bytes.
   * 
   * @example
   * 77549
   */
  fileSizeInBytes?: number;
  /**
   * @remarks
   * The ID of the certificate file.
   * 
   * @example
   * 676303114031776
   */
  id?: number;
  /**
   * @remarks
   * The name of the certificate file.
   * 
   * @example
   * ca1.crt
   */
  name?: string;
  /**
   * @remarks
   * The ID of the workspace to which the certificate file belongs.
   * 
   * @example
   * 177161
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      fileSizeInBytes: 'FileSizeInBytes',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      fileSizeInBytes: 'number',
      id: 'number',
      name: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the certificate file.
   */
  certificate?: GetCertificateResponseBodyCertificate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: GetCertificateResponseBodyCertificate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificate && typeof (this.certificate as any).validate === 'function') {
      (this.certificate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

