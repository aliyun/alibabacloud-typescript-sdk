// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7Config } from "./Pal7config";
import { CreatePrivateAccessApplicationRequestPortRanges } from "./CreatePrivateAccessApplicationRequestPortRanges";


export class CreatePrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The addresses of the office applications. You can enter up to 1,000 addresses of office applications.
   * 
   * This parameter is required.
   */
  addresses?: string[];
  /**
   * @remarks
   * Specifies whether to allow access from a browser. Default value: **Disabled**. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Disabled
   */
  browserAccessStatus?: string;
  /**
   * @remarks
   * The description of the office application. The value must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
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
   * app-sample
   */
  l7ProxyDomainAutomaticPrefix?: string;
  /**
   * @remarks
   * The browser access mode parameter. The parameter specifies the custom domain name of the proxy gateway. Enter a valid domain name.
   * 
   * @example
   * app1.example.com
   */
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * The name of the office application. The value must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The port ranges of the office applications. You can enter up to 65,535 port ranges. Multiple port ranges cannot be duplicated or overlapped.
   * 
   * This parameter is required.
   */
  portRanges?: CreatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * The protocol that is used by the office application. Valid values:
   * 
   * *   **All**
   * *   **TCP**
   * *   **UDP**
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the tags for the office applications. You can add up to six custom tags to an office application.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      browserAccessStatus: 'BrowserAccessStatus',
      description: 'Description',
      l7Config: 'L7Config',
      l7ProxyDomainAutomaticPrefix: 'L7ProxyDomainAutomaticPrefix',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      browserAccessStatus: 'string',
      description: 'string',
      l7Config: PAL7Config,
      l7ProxyDomainAutomaticPrefix: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': CreatePrivateAccessApplicationRequestPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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

