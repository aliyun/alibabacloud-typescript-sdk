// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceEndpointResponseBodyAclEntries extends $dara.Model {
  /**
   * @remarks
   * The comment for adding an Internet whitelist entry.
   * 
   * @example
   * 1
   */
  comment?: string;
  /**
   * @remarks
   * The CIDR block added to the Internet whitelist.
   * 
   * @example
   * 192.168.1.0/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
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

export class GetInstanceEndpointResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name used to access the Enterprise instance.
   * 
   * @example
   * shanghai-instance1-registry.cn-shanghai.cr.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type. Valid values:
   * 
   * - `SYSTEM`: system domain name
   * 
   * - `USER`: user domain name
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

export class GetInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the access control list (ACL) is enabled.
   * 
   * @example
   * true
   */
  aclEnable?: boolean;
  /**
   * @remarks
   * The list of ACL entries.
   */
  aclEntries?: GetInstanceEndpointResponseBodyAclEntries[];
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
   * The list of domain names.
   */
  domains?: GetInstanceEndpointResponseBodyDomains[];
  /**
   * @remarks
   * Indicates whether the access endpoint is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
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
   * 8F3D5EC5-39D1-4C53-A198-48C54C658FA3
   */
  requestId?: string;
  /**
   * @remarks
   * The running status. Valid values:
   * 
   * `CREATING`: Creating.
   * 
   * `RUNNING`: Running.
   * 
   * `DELETING`: Deleting.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclEnable: 'AclEnable',
      aclEntries: 'AclEntries',
      code: 'Code',
      domains: 'Domains',
      enable: 'Enable',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEnable: 'boolean',
      aclEntries: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyAclEntries },
      code: 'string',
      domains: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyDomains },
      enable: 'boolean',
      isSuccess: 'boolean',
      requestId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

