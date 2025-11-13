// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterScannerYamlResponseBody extends $dara.Model {
  /**
   * @example
   * xxx
   */
  caCertBase64?: string;
  /**
   * @example
   * xxx
   */
  clusterEnvInfo?: string;
  /**
   * @example
   * c7c190a82d9a048be9038d352840f****
   */
  clusterId?: string;
  /**
   * @example
   * xxxx-registry.cn-shanghai.cr.aliyuncs.com/default/scanner:v1
   */
  image?: string;
  /**
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @example
   * xxx
   */
  tlsCertBase64?: string;
  /**
   * @example
   * xxx
   */
  tlsKeyBase64?: string;
  /**
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

