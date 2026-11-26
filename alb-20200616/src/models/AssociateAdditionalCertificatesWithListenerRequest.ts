// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAdditionalCertificatesWithListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Only server certificates are supported.
   * > The certificate ID is a globally unique ID that ends with a region ID, such as 1011****-cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * 1011****-cn-hangzhou
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

export class AssociateAdditionalCertificatesWithListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of additional certificates.
   * 
   * This parameter is required.
   */
  certificates?: AssociateAdditionalCertificatesWithListenerRequestCertificates[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3F******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without associating the additional certificates with the HTTPS or QUIC listener. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the system returns an error. If the request passes the precheck, the system returns the `DryRunOperation` error code.
   * 
   * - **false** (default): sends the request. If the request passes the precheck, the system returns an HTTP `2xx` status code and performs the operation.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is valid only for HTTPS and QUIC listeners.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-5qnirjhpt******
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
      certificates: { 'type': 'array', 'itemType': AssociateAdditionalCertificatesWithListenerRequestCertificates },
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

