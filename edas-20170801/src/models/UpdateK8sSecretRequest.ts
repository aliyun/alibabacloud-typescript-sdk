// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sSecretRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the data has been encoded in Base64.
   * 
   * @example
   * false
   */
  base64Encoded?: boolean;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 6650277
   */
  certId?: string;
  /**
   * @remarks
   * The region ID of the certificate.
   * 
   * @example
   * cn-hangzhou
   */
  certRegionId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 9c28bbb9-****-44b3-b953-54ef8a2d0be2
   */
  clusterId?: string;
  /**
   * @remarks
   * The data of the Secret. The value must be a JSON array that contains the following information:
   * 
   * *   Key: Secret key
   * *   Value: Secret value
   * 
   * @example
   * [{"Key":"name","Value":"william"},{"Key":"age","Value":"12"}]
   */
  data?: string;
  /**
   * @remarks
   * The name of the Secret. The name must start with a letter, and can contain digits, letters, and hyphens (-). It can be up to 63 characters in length.
   * 
   * @example
   * my-secret
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The type of the Secret. Valid values:
   * 
   * *   Opaque: user-defined data type
   * *   kubernetes.io/tls: Transport Layer Security (TLS) certificate type
   * 
   * @example
   * Opaque
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64Encoded: 'Base64Encoded',
      certId: 'CertId',
      certRegionId: 'CertRegionId',
      clusterId: 'ClusterId',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64Encoded: 'boolean',
      certId: 'string',
      certRegionId: 'string',
      clusterId: 'string',
      data: 'string',
      name: 'string',
      namespace: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

