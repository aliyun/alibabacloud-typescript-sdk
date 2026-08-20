// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressGroup } from "./AddressGroup";
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
   * The application address groups. This parameter can be specified when ConfigMode is set to Precise. This parameter cannot be specified when ConfigMode is an empty string.
   */
  addressGroups?: AddressGroup[];
  /**
   * @remarks
   * The addresses of the private access application. You can specify up to 1000 addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The ID of the private access application. You can obtain the value from:
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
   * * Empty string: default mode.
   * * Precise: precise mode.
   */
  configMode?: string;
  /**
   * @remarks
   * The description of the private access application. The description must be 1 to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
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
   * The browser access mode parameter: the Layer 7 application configuration.
   */
  l7Config?: PAL7Config;
  /**
   * @remarks
   * The browser access mode parameter: the prefix of the mapped proxy domain name. The prefix must be 3 to 20 characters in length and can contain lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * app1-xxx
   */
  l7ProxyDomainAutomaticPrefix?: string;
  /**
   * @remarks
   * The browser access mode parameter: the custom proxy domain name.
   * 
   * @example
   * app1.example.com
   */
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * The browser access mode parameter: the private proxy domain name.
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
   * - **Cover** (default): overwrites the original addresses, port ranges, and tag IDs with the values of the **Addresses**, **PortRanges**, and **TagIds** parameters.
   * - **Append**: appends the values of the **Addresses**, **PortRanges**, and **TagIds** parameters to the original addresses, port ranges, and tag IDs.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * The application name.
   */
  name?: string;
  /**
   * @remarks
   * The port ranges of the private access application. You can specify up to 65535 port ranges. Multiple port ranges cannot overlap.
   */
  portRanges?: UpdatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * The protocol of the private access application. Valid values:
   * - **All**: all protocols.
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
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of private access tags. A private access application can be associated with up to 6 custom private access tags.
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

