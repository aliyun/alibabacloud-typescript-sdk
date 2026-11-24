// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressGroup } from "./AddressGroup";
import { HealthCheckConfig } from "./HealthCheckConfig";
import { PAL7Config } from "./Pal7config";
import { PAApplicationUnauthorizedAccessConfig } from "./PaapplicationUnauthorizedAccessConfig";


export class CreatePrivateAccessApplicationRequestPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port. The value must be less than or equal to the end port.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * The end port. The value must be greater than or equal to the start port.
   * 
   * This parameter is required.
   * 
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application address groups. This parameter is required when ConfigMode is set to Precise, and cannot be specified when ConfigMode is an empty string.
   */
  addressGroups?: AddressGroup[];
  /**
   * @remarks
   * The collection of private access application addresses. You can enter up to 1,000 private access application addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The browser access status of the private access application. After you enable this feature, you can access private access applications in clientless mode. Default value: **Disabled**. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * @example
   * Disabled
   */
  browserAccessStatus?: string;
  /**
   * @remarks
   * The configuration mode. Valid values:
   * * Empty string: default mode.
   * * Precise: precise mode.
   * 
   * @example
   * Precise
   */
  configMode?: string;
  /**
   * @remarks
   * The description of the private access application. The description must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * This is a private access application
   */
  description?: string;
  /**
   * @remarks
   * The health check configuration. This parameter is required when HealthCheckMode is set to Continuous, and cannot be specified when HealthCheckMode is set to OnAccess.
   */
  healthCheckConfig?: HealthCheckConfig;
  /**
   * @remarks
   * The health check mode. Valid values:
   * * OnAccess: checks upon access without proactive probing.
   * * Continuous: performs continuous checks and proactive probing based on the configurations in HealthCheckConfig.
   * If this parameter is not specified, the default value is OnAccess. When the application addresses include wildcard domain names or CIDR blocks, or when the number of application addresses exceeds 10, only OnAccess is supported.
   * 
   * @example
   * OnAccess
   */
  healthCheckMode?: string;
  /**
   * @remarks
   * The application configuration in browser access mode.
   */
  l7Config?: PAL7Config;
  /**
   * @remarks
   * The prefix of the mapped proxy domain name in browser access mode. The prefix must be 3 to 20 characters in length, and can contain lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * app-sample
   */
  l7ProxyDomainAutomaticPrefix?: string;
  /**
   * @remarks
   * The custom proxy domain name in browser access mode. The value must be a valid domain name.
   * 
   * @example
   * app1.example.com
   */
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * The name of the private access application. The name must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The collection of port ranges for the private access application. You can enter up to 65,535 port ranges. Multiple port ranges cannot be duplicate or overlap.
   */
  portRanges?: CreatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * The protocol of the private access application. Valid values:
   * - **All**: all protocols.
   * - **TCP**
   * - **UDP**
   * 
   * This parameter is required.
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * The status of the private access application. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The collection of private access tag IDs. You can associate up to six custom private access tags with a single private access application.
   */
  tagIds?: string[];
  /**
   * @remarks
   * The configuration for unauthorized application access requests.
   */
  unauthorizedAccessConfig?: PAApplicationUnauthorizedAccessConfig;
  static names(): { [key: string]: string } {
    return {
      addressGroups: 'AddressGroups',
      addresses: 'Addresses',
      browserAccessStatus: 'BrowserAccessStatus',
      configMode: 'ConfigMode',
      description: 'Description',
      healthCheckConfig: 'HealthCheckConfig',
      healthCheckMode: 'HealthCheckMode',
      l7Config: 'L7Config',
      l7ProxyDomainAutomaticPrefix: 'L7ProxyDomainAutomaticPrefix',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
      unauthorizedAccessConfig: 'UnauthorizedAccessConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressGroups: { 'type': 'array', 'itemType': AddressGroup },
      addresses: { 'type': 'array', 'itemType': 'string' },
      browserAccessStatus: 'string',
      configMode: 'string',
      description: 'string',
      healthCheckConfig: HealthCheckConfig,
      healthCheckMode: 'string',
      l7Config: PAL7Config,
      l7ProxyDomainAutomaticPrefix: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': CreatePrivateAccessApplicationRequestPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      unauthorizedAccessConfig: PAApplicationUnauthorizedAccessConfig,
    };
  }

  validate() {
    if(Array.isArray(this.addressGroups)) {
      $dara.Model.validateArray(this.addressGroups);
    }
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(this.l7Config && typeof (this.l7Config as any).validate === 'function') {
      (this.l7Config as any).validate();
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    if(this.unauthorizedAccessConfig && typeof (this.unauthorizedAccessConfig as any).validate === 'function') {
      (this.unauthorizedAccessConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

