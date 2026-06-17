// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclAppsResponseBodyAclApps extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1.0
   */
  appId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * Indicates whether the application is common. Valid values:
   * 
   * - **1**: common
   * 
   * - **0**: not common
   * 
   * -
   * 
   * @example
   * 1
   */
  popular?: number;
  /**
   * @remarks
   * The protocols supported by the application.
   */
  protocols?: string[];
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **1**: Low
   * 
   * - **2**: Medium
   * 
   * - **3**: High
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * Indicates whether the application supports `FQDN`. Valid values:
   * 
   * - **0**: No
   * 
   * - **1**: Yes
   * 
   * @example
   * 1
   */
  supportFqdn?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      popular: 'Popular',
      protocols: 'Protocols',
      riskLevel: 'RiskLevel',
      supportFqdn: 'SupportFqdn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      popular: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'number',
      supportFqdn: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAclAppsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ACL applications.
   */
  aclApps?: DescribeAclAppsResponseBodyAclApps[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9063AB86-6FFA-5B2D-A16D-697C966D****
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclApps: 'AclApps',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclApps: { 'type': 'array', 'itemType': DescribeAclAppsResponseBodyAclApps },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aclApps)) {
      $dara.Model.validateArray(this.aclApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

