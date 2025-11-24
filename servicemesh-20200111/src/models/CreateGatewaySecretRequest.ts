// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewaySecretRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIC2DCCAcACA-----END CERTIF****-----
   */
  cert?: string;
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * @example
   * ingressgateway
   */
  istioGatewayName?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2ag/Bzcgm****
   */
  key?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * bookinfo-secret
   */
  secretName?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
      istioGatewayName: 'IstioGatewayName',
      key: 'Key',
      secretName: 'SecretName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: 'string',
      istioGatewayName: 'string',
      key: 'string',
      secretName: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

