// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PAL7Config } from "./Pal7config";
import { GetPrivateAccessApplicationResponseBodyApplicationPortRanges } from "./GetPrivateAccessApplicationResponseBodyApplicationPortRanges";


export class GetPrivateAccessApplicationResponseBodyApplication extends $dara.Model {
  /**
   * @remarks
   * The addresses of the office applications.
   */
  addresses?: string[];
  /**
   * @remarks
   * The ID of the office application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The browser access mode. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  browserAccessStatus?: string;
  /**
   * @remarks
   * The IDs of connectors.
   */
  connectorIds?: string[];
  /**
   * @remarks
   * The creation time of the office application.
   * 
   * @example
   * 2022-08-30 16:50:32
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the office application.
   */
  description?: string;
  /**
   * @remarks
   * The browser access mode parameter. The parameter indicates the configurations of Layer 7 applications.
   */
  l7Config?: PAL7Config;
  /**
   * @remarks
   * The browser access mode parameter. The parameter indicates the domain name that the proxy gateway uses.
   * 
   * @example
   * app.example.com
   */
  l7ProxyDomainAutomatic?: string;
  /**
   * @remarks
   * The browser access mode parameter. The parameter indicates the custom domain name of the proxy gateway.
   * 
   * @example
   * app.example.com
   */
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * The name of the office application.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the private access policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The port ranges of the office applications. Multiple port ranges cannot be duplicated or overlapped.
   */
  portRanges?: GetPrivateAccessApplicationResponseBodyApplicationPortRanges[];
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
   * The IDs of the tags for the office applications.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      browserAccessStatus: 'BrowserAccessStatus',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
      l7Config: 'L7Config',
      l7ProxyDomainAutomatic: 'L7ProxyDomainAutomatic',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      policyIds: 'PolicyIds',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      browserAccessStatus: 'string',
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      l7Config: PAL7Config,
      l7ProxyDomainAutomatic: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      portRanges: { 'type': 'array', 'itemType': GetPrivateAccessApplicationResponseBodyApplicationPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.connectorIds)) {
      $dara.Model.validateArray(this.connectorIds);
    }
    if(this.l7Config && typeof (this.l7Config as any).validate === 'function') {
      (this.l7Config as any).validate();
    }
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
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

