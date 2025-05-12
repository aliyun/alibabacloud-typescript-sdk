// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceEndpointResponseBodyEndpointsAclEntries } from "./ListInstanceEndpointResponseBodyEndpointsAclEntries";
import { ListInstanceEndpointResponseBodyEndpointsDomains } from "./ListInstanceEndpointResponseBodyEndpointsDomains";
import { ListInstanceEndpointResponseBodyEndpointsLinkedVpcs } from "./ListInstanceEndpointResponseBodyEndpointsLinkedVpcs";


export class ListInstanceEndpointResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the endpoint is added to an access control list (ACL).
   * 
   * @example
   * true
   */
  aclEnable?: boolean;
  /**
   * @remarks
   * The ACLs that are configured for the instance.
   */
  aclEntries?: ListInstanceEndpointResponseBodyEndpointsAclEntries[];
  /**
   * @remarks
   * The list of domain names of the Container Registry instance.
   */
  domains?: ListInstanceEndpointResponseBodyEndpointsDomains[];
  /**
   * @remarks
   * Indicates whether the endpoint is added to an ACL.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of the endpoint.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The VPCs associated with the instance.
   */
  linkedVpcs?: ListInstanceEndpointResponseBodyEndpointsLinkedVpcs[];
  /**
   * @remarks
   * The status of the endpoint.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclEnable: 'AclEnable',
      aclEntries: 'AclEntries',
      domains: 'Domains',
      enable: 'Enable',
      endpointType: 'EndpointType',
      linkedVpcs: 'LinkedVpcs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEnable: 'boolean',
      aclEntries: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsAclEntries },
      domains: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsDomains },
      enable: 'boolean',
      endpointType: 'string',
      linkedVpcs: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsLinkedVpcs },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.linkedVpcs)) {
      $dara.Model.validateArray(this.linkedVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

