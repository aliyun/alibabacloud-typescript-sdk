// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate alert for partially completed jobs. This parameter is valid only for on-premises file backup and ECS file backup.
   * 
   * @example
   * false
   */
  alertOnPartialComplete?: boolean;
  /**
   * @remarks
   * The ID of the HBR client.
   * 
   * This parameter is required.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The type of the endpoint on the data plane. Valid values:
   * 
   * *   **PUBLIC**: Internet
   * *   **VPC**: virtual private cloud (VPC)
   * *   **CLASSIC**: classic network
   * 
   * @example
   * VPC
   */
  dataNetworkType?: string;
  /**
   * @remarks
   * The proxy configuration on the data plane. Valid values:
   * 
   * *   **DISABLE**: The proxy is not used.
   * *   **USE_CONTROL_PROXY** (default): The configuration is the same as that on the control plane.
   * *   **CUSTOM**: The configuration is customized (HTTP).
   * 
   * @example
   * USE_CONTROL_PROXY
   */
  dataProxySetting?: string;
  /**
   * @remarks
   * The number of CPU cores used by a single backup job. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxCpuCore?: number;
  /**
   * @remarks
   * The maximum memory that can be used by the client. Unit: bytes. Only V2.13.0 and later are supported.
   * 
   * @example
   * 4096
   */
  maxMemory?: number;
  /**
   * @remarks
   * The number of concurrent backup jobs. The value 0 indicates that the number is unlimited.
   * 
   * @example
   * 1
   */
  maxWorker?: number;
  /**
   * @remarks
   * The custom host IP address of the proxy server on the data plane.
   * 
   * @example
   * 192.168.11.100
   */
  proxyHost?: string;
  /**
   * @remarks
   * The custom password of the proxy server on the data plane.
   * 
   * @example
   * ******
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The custom host port of the proxy server on the data plane.
   * 
   * @example
   * 3128
   */
  proxyPort?: number;
  /**
   * @remarks
   * The custom username of the proxy server on the data plane.
   * 
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-*********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to transmit the data on the data plane over HTTPS. Valid values:
   * 
   * *   true: Data is transmitted over HTTPS.
   * *   false: Data is transmitted over HTTP.
   * 
   * @example
   * false
   */
  useHttps?: boolean;
  /**
   * @remarks
   * The ID of the backup vault. This parameter is required for the old HBR client.
   * 
   * @example
   * v-*********************
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      alertOnPartialComplete: 'AlertOnPartialComplete',
      clientId: 'ClientId',
      dataNetworkType: 'DataNetworkType',
      dataProxySetting: 'DataProxySetting',
      maxCpuCore: 'MaxCpuCore',
      maxMemory: 'MaxMemory',
      maxWorker: 'MaxWorker',
      proxyHost: 'ProxyHost',
      proxyPassword: 'ProxyPassword',
      proxyPort: 'ProxyPort',
      proxyUser: 'ProxyUser',
      resourceGroupId: 'ResourceGroupId',
      useHttps: 'UseHttps',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertOnPartialComplete: 'boolean',
      clientId: 'string',
      dataNetworkType: 'string',
      dataProxySetting: 'string',
      maxCpuCore: 'number',
      maxMemory: 'number',
      maxWorker: 'number',
      proxyHost: 'string',
      proxyPassword: 'string',
      proxyPort: 'number',
      proxyUser: 'string',
      resourceGroupId: 'string',
      useHttps: 'boolean',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

