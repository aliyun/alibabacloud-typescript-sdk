// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterScannerYamlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Base64 encoded CA certificate.
   * 
   * @example
   * xxx
   */
  caCertBase64?: string;
  /**
   * @remarks
   * Cluster environment information.
   * 
   * @example
   * xxx
   */
  clusterEnvInfo?: string;
  /**
   * @remarks
   * The ID of the cluster that you want to scan.
   * 
   * @example
   * c7c190a82d9a048be9038d352840f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * xxxx-registry.cn-shanghai.cr.aliyuncs.com/default/scanner:v1
   */
  image?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @remarks
   * Base64 encoded webhook certificate.
   * 
   * @example
   * xxx
   */
  tlsCertBase64?: string;
  /**
   * @remarks
   * Base64 encoded webhook private key.
   * 
   * @example
   * xxx
   */
  tlsKeyBase64?: string;
  /**
   * @remarks
   * Indicates whether the incremental scan switch is enabled. Values:
   * - **0**: Not enabled
   * - **1**: Enabled
   * 
   * @example
   * 1
   */
  webhookOpen?: number;
  static names(): { [key: string]: string } {
    return {
      caCertBase64: 'CaCertBase64',
      clusterEnvInfo: 'ClusterEnvInfo',
      clusterId: 'ClusterId',
      image: 'Image',
      requestId: 'RequestId',
      tlsCertBase64: 'TlsCertBase64',
      tlsKeyBase64: 'TlsKeyBase64',
      webhookOpen: 'WebhookOpen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertBase64: 'string',
      clusterEnvInfo: 'string',
      clusterId: 'string',
      image: 'string',
      requestId: 'string',
      tlsCertBase64: 'string',
      tlsKeyBase64: 'string',
      webhookOpen: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

