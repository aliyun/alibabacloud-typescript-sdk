// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigClusterCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDaTCCAlECAQEwDQYJKoZIhvcNAQELBQAwVTELMAkGA1UEBhMCY24xCzAJBgNV
   * BAgMAnpqMQswCQYDVQQHDAJoejEWMBQGA1UECgwNQWxpYmFiYSBDbG91ZDEUMBIG
   * A1UECwwLU2VjQ2xvdWRIc20wHhcNMjQwNzAzM****-----END CERTIFICATE-----
   */
  clusterCertificate?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-BqxX63Bsg****
   */
  clusterId?: string;
  /**
   * @remarks
   * The self-signed certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   * MIIDfTCCAmWgAwIBAgIJAMRqQMr5if66MA0GCSqGSIb3DQEBCwUAMFUxCzAJBgNV
   * BAYTAmNuMQswCQYDVQQIDAJ6ajELMAkGA1UEBwwCaHoxFjAUBgNVBAoMDUFsaWJh
   * YmEgQ2xvdWQxFDA****
   * -----END CERTIFICATE-----
   */
  issuerCertificate?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCertificate: 'ClusterCertificate',
      clusterId: 'ClusterId',
      issuerCertificate: 'IssuerCertificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCertificate: 'string',
      clusterId: 'string',
      issuerCertificate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

