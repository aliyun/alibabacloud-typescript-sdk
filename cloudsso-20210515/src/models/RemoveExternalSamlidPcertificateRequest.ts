// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveExternalSAMLIdPCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * You can call the [ListExternalSAMLIdPCertificates](https://help.aliyun.com/document_detail/341629.html) operation to query the IDs of certificates.
   * 
   * @example
   * idp-c-00dt9gnl7fmjaw9c****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      directoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

