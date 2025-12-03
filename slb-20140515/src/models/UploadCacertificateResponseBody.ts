// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadCACertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * 139a0******-cn-east-hangzhou-01
   */
  CACertificateId?: string;
  /**
   * @remarks
   * The CA certificate name.
   * 
   * @example
   * mycacert01
   */
  CACertificateName?: string;
  /**
   * @remarks
   * The domain name on the CA certificate.
   * 
   * @example
   * .example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The time when the CA certificate was created.
   * 
   * @example
   * 2017-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp when the CA certificate was created.
   * 
   * @example
   * 1504147745000
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * The time when the CA certificate expires.
   * 
   * @example
   * 2024-11-21T06:04:25Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The timestamp when the server certificate expires.
   * 
   * @example
   * 1732169065000
   */
  expireTimeStamp?: number;
  /**
   * @remarks
   * The fingerprint of the server certificate.
   * 
   * @example
   * 02:DF:AB:ED
   */
  fingerprint?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rt******
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      CACertificateId: 'CACertificateId',
      CACertificateName: 'CACertificateName',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      createTimeStamp: 'CreateTimeStamp',
      expireTime: 'ExpireTime',
      expireTimeStamp: 'ExpireTimeStamp',
      fingerprint: 'Fingerprint',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CACertificateId: 'string',
      CACertificateName: 'string',
      commonName: 'string',
      createTime: 'string',
      createTimeStamp: 'number',
      expireTime: 'string',
      expireTimeStamp: 'number',
      fingerprint: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

