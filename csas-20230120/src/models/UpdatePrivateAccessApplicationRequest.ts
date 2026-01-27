// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressGroup } from "./AddressGroup";
import { PAL7Config } from "./Pal7config";


export class UpdatePrivateAccessApplicationRequestPortRanges extends $dara.Model {
  /**
   * @remarks
   * The start port. The start port must be less than or equal to the end port.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * The end port. The end port must be greater than or equal to the start port.
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
  addressGroups?: AddressGroup[];
  /**
   * @remarks
   * The addresses of the office applications. You can enter up to 1,000 addresses of office applications.
   */
  addresses?: string[];
  /**
   * @remarks
   * The ID of the office application. You can obtain the value by calling the following operations:
   * 
   * *   [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): queries office applications.
   * *   [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): creates an office application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  configMode?: string;
  /**
   * @remarks
   * The description of the office application. The value must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The browser access mode parameter. The parameter specifies the configurations of Layer 7 applications.
   */
  l7Config?: PAL7Config;
  /**
   * @remarks
   * The browser access mode parameter. The parameter specifies the prefix of the domain name that the proxy gateway uses. The prefix must be 3 to 20 characters in length, and can contain lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * app1-xxx
   */
  l7ProxyDomainAutomaticPrefix?: string;
  /**
   * @remarks
   * The browser access mode parameter. The parameter specifies the custom domain name of the proxy gateway.
   * 
   * @example
   * app1.example.com
   */
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * 浏览器访问模式参数：私有代理域名。
   * 
   * @example
   * app1.example.com
   * 
   * @deprecated
   */
  l7ProxyDomainPrivate?: string;
  /**
   * @remarks
   * The modification type of the office application. Valid values:
   * 
   * *   **Cover**: uses the values of the **Addresses**, **PortRanges**, and **TagIds** parameters to overwrite the original addresses, port ranges, and tag IDs. This is the default value.
   * *   **Append**: adds the values of the **Addresses**, **PortRanges**, and **TagIds** parameters respectively to the original addresses, port ranges, and tag IDs.
   * 
   * @example
   * Cover
   */
  modifyType?: string;
  name?: string;
  /**
   * @remarks
   * The port ranges of the office applications. You can enter up to 65,535 port ranges. Multiple port ranges cannot be duplicated or overlapped.
   */
  portRanges?: UpdatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * The protocol that is used by the office application. Valid values:
   * 
   * *   **All**
   * *   **TCP**
   * *   **UDP**
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * The status of the office application. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the tags for the office applications. You can add up to six custom tags to an office application.
   * 
   * **if can be null:**
   * true
   */
  tagIds?: string[];
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

