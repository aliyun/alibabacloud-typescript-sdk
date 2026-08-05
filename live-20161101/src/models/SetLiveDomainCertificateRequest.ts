// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLiveDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * Cert-****
   */
  certName?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - **upload**: an uploaded certificate.
   * - **cas**: a certificate from SSL Certificates Service.
   * - **free**: a personal test certificate (Free Edition).
   * 
   * @example
   * free
   */
  certType?: string;
  /**
   * @remarks
   * The accelerated domain name to which the certificate belongs. The domain name is of the `https` acceleration type.
   * 
   * This parameter is required.
   * 
   * @example
   * developer.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without actually executing the operation. Valid values:
   * 
   * - true: sends a dry run request. If the request passes the check, the operation is not actually executed.
   * - false (default): sends a normal request. If the request passes the check, the operation is actually executed.
   * 
   * The dry run checks parameter validity, RAM permissions, and resource status. If the dry run fails, the corresponding error code is returned. If the dry run succeeds, the operation is not actually executed.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Ignores the check for duplicate certificate names and overwrites the existing certificate information with the same name. Fixed value: **1**.
   * 
   * @example
   * 1
   */
  forceSet?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private key content.
   * 
   * > This parameter is required only when SSLProtocol is set to on.
   * 
   * @example
   * ****
   */
  SSLPri?: string;
  /**
   * @remarks
   * Specifies whether to enable the HTTPS certificate. Valid values: 
   * - **on**: enabled. If the value is **on**, you must also set the SSLPub and SSLPri request parameters.
   * - **off** (default): disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  SSLProtocol?: string;
  /**
   * @remarks
   * The public key content.
   * 
   * > This parameter is required only when SSLProtocol is set to on.
   * 
   * @example
   * ****
   */
  SSLPub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      certType: 'CertType',
      domainName: 'DomainName',
      dryRun: 'DryRun',
      forceSet: 'ForceSet',
      ownerId: 'OwnerId',
      SSLPri: 'SSLPri',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certType: 'string',
      domainName: 'string',
      dryRun: 'boolean',
      forceSet: 'string',
      ownerId: 'number',
      SSLPri: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

