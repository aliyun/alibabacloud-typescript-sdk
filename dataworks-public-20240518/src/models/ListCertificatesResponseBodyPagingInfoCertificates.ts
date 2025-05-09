// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesResponseBodyPagingInfoCertificates extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate file was created. This value is a UNIX timestamp.
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
   * 1024
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
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      fileSizeInBytes: 'FileSizeInBytes',
      id: 'Id',
      name: 'Name',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

