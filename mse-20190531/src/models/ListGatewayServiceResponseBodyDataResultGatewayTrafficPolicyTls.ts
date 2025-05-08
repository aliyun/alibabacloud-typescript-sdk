// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayServiceResponseBodyDataResultGatewayTrafficPolicyTls extends $dara.Model {
  /**
   * @remarks
   * The public key of the CA certificate .
   * 
   * @example
   * content
   */
  caCertContent?: string;
  /**
   * @remarks
   * The ID of the certification authority (CA) certificate.
   * 
   * @example
   * 5******-cn-hangzhou
   */
  caCertId?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 5******-cn-hangzhou
   */
  certId?: string;
  /**
   * @remarks
   * The TLS mode.
   * 
   * *   DISABLE
   * *   SIMPLE
   * *   MUTUAL
   * *   ISTIO_MUTUAL
   * 
   * @example
   * SIMPLE
   */
  mode?: string;
  /**
   * @remarks
   * The Server Name Indication (SNI) value.
   * 
   * @example
   * name-sni
   */
  sni?: string;
  /**
   * @remarks
   * The array of subject aliases.
   */
  subjectAltNames?: string[];
  static names(): { [key: string]: string } {
    return {
      caCertContent: 'CaCertContent',
      caCertId: 'CaCertId',
      certId: 'CertId',
      mode: 'Mode',
      sni: 'Sni',
      subjectAltNames: 'SubjectAltNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertContent: 'string',
      caCertId: 'string',
      certId: 'string',
      mode: 'string',
      sni: 'string',
      subjectAltNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subjectAltNames)) {
      $dara.Model.validateArray(this.subjectAltNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

