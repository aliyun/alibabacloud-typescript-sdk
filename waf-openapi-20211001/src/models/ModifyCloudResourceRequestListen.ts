// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCloudResourceRequestListenCertificates } from "./ModifyCloudResourceRequestListenCertificates";


export class ModifyCloudResourceRequestListen extends $dara.Model {
  /**
   * @remarks
   * The certificates.
   */
  certificates?: ModifyCloudResourceRequestListenCertificates[];
  /**
   * @remarks
   * The type of the cipher suites that you want to add. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **1**: all cipher suites.
   * *   **2**: strong cipher suites. This value is available only if you set **TLSVersion** to **tlsv1.2**.
   * *   **99**: custom cipher suites.
   * 
   * @example
   * 1
   */
  cipherSuite?: number;
  /**
   * @remarks
   * The custom cipher suites that you want to add.
   */
  customCiphers?: string[];
  /**
   * @remarks
   * Specifies whether to support TLS 1.3. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  enableTLSv3?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  http2Enabled?: boolean;
  /**
   * @remarks
   * The port of the cloud service instance that is added to WAF.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **http**
   * *   **https**
   * 
   * This parameter is required.
   * 
   * @example
   * http
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the cloud service instance that is added to WAF.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-***
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud service. Valid values:
   * 
   * *   **clb4**: Layer 4 Classic Load Balancer (CLB).
   * *   **clb7**: Layer 7 CLB.
   * *   **ecs**: Elastic Compute Service (ECS).
   * *   **nlb**: Network Load Balancer (NLB).
   * 
   * This parameter is required.
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  /**
   * @remarks
   * The Transport Layer Security (TLS) version that you want to add. This parameter is available only if you specify **HttpsPorts**. Valid values:
   * 
   * *   **tlsv1**
   * *   **tlsv1.1**
   * *   **tlsv1.2**
   * 
   * @example
   * tlsv1.2
   */
  TLSVersion?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cipherSuite: 'CipherSuite',
      customCiphers: 'CustomCiphers',
      enableTLSv3: 'EnableTLSv3',
      http2Enabled: 'Http2Enabled',
      port: 'Port',
      protocol: 'Protocol',
      resourceInstanceId: 'ResourceInstanceId',
      resourceProduct: 'ResourceProduct',
      TLSVersion: 'TLSVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ModifyCloudResourceRequestListenCertificates },
      cipherSuite: 'number',
      customCiphers: { 'type': 'array', 'itemType': 'string' },
      enableTLSv3: 'boolean',
      http2Enabled: 'boolean',
      port: 'number',
      protocol: 'string',
      resourceInstanceId: 'string',
      resourceProduct: 'string',
      TLSVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    if(Array.isArray(this.customCiphers)) {
      $dara.Model.validateArray(this.customCiphers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

