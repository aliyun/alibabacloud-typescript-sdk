// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to trigger an alert for partially completed jobs. This parameter takes effect only for local File Backup and ECS File Backup Essential Edition.
   * 
   * @example
   * false
   */
  alertOnPartialComplete?: boolean;
  /**
   * @remarks
   * The backup client ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-*********************
   */
  clientId?: string;
  /**
   * @remarks
   * The data plane access point type. Valid values:
   * * **PUBLIC**: public network
   * * **VPC**: VPC network
   * * **CLASSIC**: classic network
   * 
   * @example
   * VPC
   */
  dataNetworkType?: string;
  /**
   * @remarks
   * The data plane proxy setting. Valid values:
   * * **DISABLE**: does not use a proxy.
   * * **USE_CONTROL_PROXY** (default): uses the same configuration as the control plane.
   * * **CUSTOM**: uses a custom configuration (HTTP protocol).
   * 
   * @example
   * USE_CONTROL_PROXY
   */
  dataProxySetting?: string;
  /**
   * @remarks
   * The number of CPU cores used by a single backup job. A value of 0 indicates no limit.
   * 
   * @example
   * 1
   */
  maxCpuCore?: number;
  /**
   * @remarks
   * The maximum memory that the client can use, in bytes. Only version 2.13.0 and later are supported.
   * 
   * @example
   * 4096
   */
  maxMemory?: number;
  /**
   * @remarks
   * The number of concurrent workers for a single backup job. A value of 0 indicates no limit.
   * 
   * @example
   * 1
   */
  maxWorker?: number;
  /**
   * @remarks
   * The IP address of the custom data plane proxy server host.
   * 
   * @example
   * 192.168.11.100
   */
  proxyHost?: string;
  /**
   * @remarks
   * The password of the custom data plane proxy server.
   * 
   * @example
   * ******
   */
  proxyPassword?: string;
  /**
   * @remarks
   * The port of the custom data plane proxy server host.
   * 
   * @example
   * 3128
   */
  proxyPort?: number;
  /**
   * @remarks
   * The username of the custom data plane proxy server.
   * 
   * @example
   * user
   */
  proxyUser?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-*********************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to use HTTPS to transmit data plane data.
   * 
   * - true: Uses HTTPS for transmission.
   * - false: Uses HTTP for transmission.
   * 
   * @example
   * false
   */
  useHttps?: boolean;
  /**
   * @remarks
   * The backup vault ID. This parameter is required for legacy clients.
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

