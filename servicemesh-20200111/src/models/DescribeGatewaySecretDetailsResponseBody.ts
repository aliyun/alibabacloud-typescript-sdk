// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewaySecretDetailsResponseBodyGatewaySecretDetails extends $dara.Model {
  /**
   * @remarks
   * The time when the certificate expires.
   * 
   * @example
   * 2023-03-03 07:45
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * bookinfo-gateway
   */
  gatewayName?: string;
  /**
   * @remarks
   * The time when the certificate was issued.
   * 
   * @example
   * 2022-03-03 07:45
   */
  issueTime?: string;
  /**
   * @remarks
   * *   An error message is returned if the status of the gateway is abnormal. Examples: `tls.crt not exist`, `tls.key not exist`, and `secret type must be kubernetes.io/tls`.
   * *   An empty value is returned if the status of the gateway is normal.
   * 
   * @example
   * tls.crt not exist
   */
  message?: string;
  /**
   * @remarks
   * The Server Name Indication (SNI) value.
   * 
   * @example
   * demo.com
   */
  SNI?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * demo-secret
   */
  secretName?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   `normal`
   * *   `abnormal`
   * 
   * @example
   * normal
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      gatewayName: 'GatewayName',
      issueTime: 'IssueTime',
      message: 'Message',
      SNI: 'SNI',
      secretName: 'SecretName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      gatewayName: 'string',
      issueTime: 'string',
      message: 'string',
      SNI: 'string',
      secretName: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewaySecretDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the secret of the ASM gateway.
   */
  gatewaySecretDetails?: DescribeGatewaySecretDetailsResponseBodyGatewaySecretDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewaySecretDetails: 'GatewaySecretDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySecretDetails: { 'type': 'array', 'itemType': DescribeGatewaySecretDetailsResponseBodyGatewaySecretDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewaySecretDetails)) {
      $dara.Model.validateArray(this.gatewaySecretDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

