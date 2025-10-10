// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateAdditionalCertificatesFromListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12315790343_166f8204689_1714763408_70998****
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateAdditionalCertificatesFromListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The additional certificates. Only server certificates are supported. You can specify at most 20 certificates.
   * 
   * This parameter is required.
   */
  certificates?: DissociateAdditionalCertificatesFromListenerRequestCertificates[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a **2xx HTTP** status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID. You must specify the ID of an HTTPS listener or a QUIC listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DissociateAdditionalCertificatesFromListenerRequestCertificates },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

