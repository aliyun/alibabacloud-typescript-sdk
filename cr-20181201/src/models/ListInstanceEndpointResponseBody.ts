// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceEndpointResponseBodyEndpointsAclEntries extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL.
   * 
   * @example
   * null
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpointsDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Container Registry instance.
   * 
   * @example
   * t****-registry.cn-shanghai.cr.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   SYSTEM: system domain name.
   * *   USER: user domain name.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpointsLinkedVpcs extends $dara.Model {
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * null
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The endpoints of the instance.
   */
  endpoints?: ListInstanceEndpointResponseBodyEndpoints[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B21A877-66A2-4095-90EB-20A7781A4A67
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endpoints: 'Endpoints',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endpoints: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpoints },
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

