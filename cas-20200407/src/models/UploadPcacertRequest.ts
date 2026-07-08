// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadPCACertRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate and its chain, in PEM format.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIEJDCCAwygAwIBAgIQITRHItTLTQizTyd3K7AMRTANBgkqhkiG9w0BAQsFADBe **************** 5/akmr2GK/Y= -----END CERTIFICATE----- -----BEGIN CERTIFICATE----- MIIDuzCCAqOgAwIBAgIQSEIWDPfWTDKZcWNyL2O+fjANBgkqhkiG9w0BAQsFADBf **************** URUHyMW5Qd5Q9g6Y4sDOIm6It9TF7EjpwMs42R30agcRYzuUsN72ZFBYFJwnBX8= -----END CERTIFICATE----- -----BEGIN CERTIFICATE----- MIIDizCCAnOgAwIBAgIRAMfjPkDKfELTo07l3A3cUSYwDQYJKoZIhvcNAQELBQAw ********* CjWTnYPhCcO2uIcnqMt7zCVs5LXBK/XSwlAXKMvKT0uuzw9VxeMfEabflKu0By8= -----END CERTIFICATE-----
   */
  cert?: string;
  /**
   * @remarks
   * A custom name for the certificate.
   * 
   * @example
   * cert_name
   */
  name?: string;
  /**
   * @remarks
   * The private key of the certificate, in PEM format.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MIIEowIBAAKCAQEA5SIfpNCBoiDrZhX1H39CHwQMVD0kBNeBTWfP9xkeesvfzbOz ******* POVNFfDf9h7pJtQ5fRZNTYTDs/d+cH62Z3+nS74mNnEfff0nkvne -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The ID of the certificate warehouse.
   * 
   * > Call [ListCertWarehouse](https://help.aliyun.com/document_detail/455805.html) to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  warehouseId?: number;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      name: 'Name',
      privateKey: 'PrivateKey',
      warehouseId: 'WarehouseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      name: 'string',
      privateKey: 'string',
      warehouseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

