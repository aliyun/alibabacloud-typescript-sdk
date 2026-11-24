// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressGroup } from "./AddressGroup";
import { HealthCheckConfig } from "./HealthCheckConfig";
import { PAL7Config } from "./Pal7config";
import { PAApplicationUnauthorizedAccessConfig } from "./PaapplicationUnauthorizedAccessConfig";


export class UpdatePrivateAccessApplicationRequestPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port. The value must be less than or equal to the end port.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * The end port. The value must be greater than or equal to the start port.
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

export class UpdatePrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application address groups. You can specify this parameter when ConfigMode is set to Precise. You cannot specify this parameter when ConfigMode is an empty string.
   */
  addressGroups?: AddressGroup[];
  /**
   * @remarks
   * The addresses of the private access application. You can specify up to 1,000 addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The ID of the private access application. You can obtain the value from the following operations:
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Lists private access applications.
   * - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): Creates a private access application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration mode. Valid values:
   * * Empty string: Default mode.
   * * Precise: Precise mode.
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
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The health check configuration. This parameter takes effect only when HealthCheckMode is set to Continuous. You cannot specify this parameter when HealthCheckMode is set to OnAccess.
   */
  healthCheckConfig?: HealthCheckConfig;
  /**
   * @remarks
   * The health check mode. Valid values:
   * * OnAccess: Checks health upon access without active probing.
   * * Continuous: Performs continuous health checks and periodically probes based on the configuration in HealthCheckConfig.
   * If this parameter is not specified, the default value is OnAccess. When the application addresses include wildcard domain names or CIDR blocks, or when the number of application addresses exceeds 10, only OnAccess is supported.
   * 
   * @example
   * OnAccess
   */
  healthCheckMode?: string;
  /**
   * @remarks
   * The Layer 7 application configuration in browser access mode.
   */
  l7Config?: PAL7Config;
  /**
   * @remarks
   * The prefix of the mapped proxy domain name in browser access mode. The prefix must be 3 to 20 characters in length, and can contain lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * app1-xxx
   */
  l7ProxyDomainAutomaticPrefix?: string;
  /**
   * @remarks
   * The custom proxy domain name in browser access mode.
   * 
   * @example
   * app1.example.com
   */
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * The private proxy domain name in browser access mode.
   * 
   * @example
   * app1.example.com
   * 
   * @deprecated
   */
  l7ProxyDomainPrivate?: string;
  /**
   * @remarks
   * The modification type of the private access application. Valid values:
   * - **Cover** (default): Overwrites the original addresses, port ranges, and tag IDs with the values of the **Addresses**, **PortRanges**, and **TagIds** parameters.
   * - **Append**: Appends the values of the **Addresses**, **PortRanges**, and **TagIds** parameters to the original addresses, port ranges, and tag IDs.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The port ranges of the private access application. You can specify up to 65,535 port ranges. Multiple port ranges cannot be duplicate or overlap.
   */
  portRanges?: UpdatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * The protocol of the private access application. Valid values:
   * - **All**: All protocols.
   * - **TCP**
   * - **UDP**
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * The status of the private access application. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the private access tags. You can associate up to six custom private access tags with a private access application.
   * 
   * **if can be null:**
   * true
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
      applicationId: 'ApplicationId',
      configMode: 'ConfigMode',
      description: 'Description',
      healthCheckConfig: 'HealthCheckConfig',
      healthCheckMode: 'HealthCheckMode',
      l7Config: 'L7Config',
      l7ProxyDomainAutomaticPrefix: 'L7ProxyDomainAutomaticPrefix',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      l7ProxyDomainPrivate: 'L7ProxyDomainPrivate',
      modifyType: 'ModifyType',
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
      applicationId: 'string',
      configMode: 'string',
      description: 'string',
      healthCheckConfig: HealthCheckConfig,
      healthCheckMode: 'string',
      l7Config: PAL7Config,
      l7ProxyDomainAutomaticPrefix: 'string',
      l7ProxyDomainCustom: 'string',
      l7ProxyDomainPrivate: 'string',
      modifyType: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationRequestPortRanges },
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

