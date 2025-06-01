// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges } from "./ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges";


export class ListPrivateAccessApplicationsResponseBodyApplications extends $dara.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  browserAccessStatus?: string;
  connectorIds?: string[];
  /**
   * @example
   * 2022-12-16 15:03:42
   */
  createTime?: string;
  description?: string;
  l7ProxyDomainAutomatic?: string;
  l7ProxyDomainCustom?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  policyIds?: string[];
  portRanges?: ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      browserAccessStatus: 'BrowserAccessStatus',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
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
      l7ProxyDomainAutomatic: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      portRanges: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges },
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

