// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSSLResponseBodyInstanceSSL extends $dara.Model {
  /**
   * @remarks
   * The status of automatic update of SSL certificates. Valid values: 
   * * CLOSE: The automatic update of SSL certificates is disabled. 
   * * OPEN: The automatic update of SSL certificates is enabled.
   * 
   * @example
   * OPEN
   */
  autoUpdate?: string;
  /**
   * @remarks
   * The URL of the certificate authority (CA) node.
   * 
   * @example
   * https://xxxx
   */
  caUrl?: string;
  /**
   * @remarks
   * The operation to modify the SSL status. Valid values:
   * 
   * - open: Enable SSL encryption.
   * 
   * - update: Update the CA certificate.
   * 
   * - close: Disable SSL encryption.
   * 
   * @example
   * OPEN
   */
  enableSSL?: string;
  /**
   * @remarks
   * The forced enabling status of SSL.
   * 
   * @example
   * CLOSE
   */
  forceSSL?: string;
  /**
   * @remarks
   * Indicates whether SSL can be forcibly enabled.
   * 
   * @example
   * false
   */
  forceSSLSupport?: boolean;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The SSL status of the cluster.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  tenantId?: string;
  /**
   * @remarks
   * The validity period of the SSL certificate.
   * 
   * @example
   * 2024-09-20 07:55:03.0
   */
  validPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdate: 'AutoUpdate',
      caUrl: 'CaUrl',
      enableSSL: 'EnableSSL',
      forceSSL: 'ForceSSL',
      forceSSLSupport: 'ForceSSLSupport',
      instanceId: 'InstanceId',
      status: 'Status',
      tenantId: 'TenantId',
      validPeriod: 'ValidPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdate: 'string',
      caUrl: 'string',
      enableSSL: 'string',
      forceSSL: 'string',
      forceSSLSupport: 'boolean',
      instanceId: 'string',
      status: 'string',
      tenantId: 'string',
      validPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

