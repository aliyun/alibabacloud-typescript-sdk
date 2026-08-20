// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressGroup } from "./AddressGroup";
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
   * The application address groups. Required when ConfigMode is set to Precise. Not allowed when ConfigMode is an empty string.
   */
  addressGroups?: AddressGroup[];
  /**
   * @remarks
   * The collection of internal-facing access application addresses. You can specify up to 1000 addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The browser access status of the internal-facing access application. After this feature is enabled, you can access internal applications in a clientless manner. Default value: **Disabled**. Valid values:
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
   */
  configMode?: string;
  /**
   * @remarks
   * The description of the internal-facing access application. The description must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. Chinese characters are supported.
   * 
   * @example
   * This is an internal-facing access application
   */
  description?: string;
  /**
   * @remarks
   * The browser access mode parameter: the application configuration.
   */
  l7Config?: PAL7Config;
  /**
   * @remarks
   * The browser access mode parameter: the prefix of the mapped proxy domain name. The prefix must be 3 to 20 characters in length and can contain lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * app-sample
   */
  l7ProxyDomainAutomaticPrefix?: string;
  /**
   * @remarks
   * The browser access mode parameter: the custom proxy domain name. The value must be a valid domain name.
   * 
   * @example
   * app1.example.com
   */
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * The name of the internal-facing access application. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). Chinese characters are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The collection of port ranges for the internal-facing access application. You can specify up to 65535 port ranges. Port ranges cannot overlap or be duplicated.
   */
  portRanges?: CreatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * The protocol of the internal-facing access application. Valid values:
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
   * The status of the internal-facing access application. Valid values:
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
   * The collection of internal-facing access tag IDs. You can associate up to 6 custom-type internal-facing access tags with each application.
   */
  tagIds?: string[];
  unauthorizedAccessConfig?: PAApplicationUnauthorizedAccessConfig;
  static names(): { [key: string]: string } {
    return {
      addressGroups: 'AddressGroups',
      addresses: 'Addresses',
      browserAccessStatus: 'BrowserAccessStatus',
      configMode: 'ConfigMode',
      description: 'Description',
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

