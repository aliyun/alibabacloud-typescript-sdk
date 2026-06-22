// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterScannerYamlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CA certificate in Base64 encoding.
   * 
   * @example
   * xxx
   */
  caCertBase64?: string;
  /**
   * @remarks
   * The cluster environment context.
   * 
   * @example
   * xxx
   */
  clusterEnvInfo?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c7c190a82d9a048be9038d352840f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The container image information.
   * 
   * @example
   * xxxx-registry.cn-shanghai.cr.aliyuncs.com/default/scanner:v1
   */
  image?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @remarks
   * The webhook certificate in Base64 encoding.
   * 
   * @example
   * xxx
   */
  tlsCertBase64?: string;
  /**
   * @remarks
   * The webhook private key in Base64 encoding.
   * 
   * @example
   * xxx
   */
  tlsKeyBase64?: string;
  /**
   * @remarks
   * Indicates whether incremental scanning is enabled. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
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

