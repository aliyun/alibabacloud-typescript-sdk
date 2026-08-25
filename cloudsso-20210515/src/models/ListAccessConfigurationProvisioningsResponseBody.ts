// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * VPC-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The first time when the access configuration was provisioned.
   * 
   * @example
   * 2021-07-26T08:54:14Z
   */
  createTime?: string;
  /**
   * @example
   * 114240524784****
   */
  originTargetId?: string;
  /**
   * @remarks
   * The name of the custom policy that is created for an account in the resource directory.
   */
  RAMPolicyNames?: string[];
  /**
   * @remarks
   * The name of the RAM role that is created for an account in the resource directory.
   * 
   * @example
   * AliyunReservedSSO-VPC-Admin
   */
  RAMRoleName?: string;
  /**
   * @remarks
   * The name of the Security Assertion Markup Language (SAML) identity provider (IdP) that is created within an account in the resource directory.
   * 
   * @example
   * AliyunReservedSSO-d-00fc2p61****
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The status of the access configuration. Valid values:
   * 
   * - Provisioned: The access configuration is provisioned.
   * 
   * - ReprovisionRequired: The access configuration needs to be re-provisioned.
   * 
   * - DeprovisionFailed: The access configuration failed to be provisioned.
   * 
   * @example
   * Provisioned
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * If the value of TargetType is `RD-Account`, the value of this parameter is the UID of an account in the resource directory.
   * 
   * @example
   * 101522521960****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * SharedServices_5009****
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object.
   * 
   * Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The last time when the access configuration was provisioned.
   * 
   * @example
   * 2021-07-26T08:54:18Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      originTargetId: 'OriginTargetId',
      RAMPolicyNames: 'RAMPolicyNames',
      RAMRoleName: 'RAMRoleName',
      SAMLProviderName: 'SAMLProviderName',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      originTargetId: 'string',
      RAMPolicyNames: { 'type': 'array', 'itemType': 'string' },
      RAMRoleName: 'string',
      SAMLProviderName: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.RAMPolicyNames)) {
      $dara.Model.validateArray(this.RAMPolicyNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessConfigurationProvisioningsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accounts for which the access configuration is provisioned.
   */
  accessConfigurationProvisionings?: ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings[];
  /**
   * @remarks
   * Indicates whether the queried entries are truncated. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * > This parameter is returned only when the value of `IsTruncated` is `true`.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BA1BDF1-D845-5D2C-B742-74BE2970E4C1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationProvisionings: 'AccessConfigurationProvisionings',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationProvisionings: { 'type': 'array', 'itemType': ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessConfigurationProvisionings)) {
      $dara.Model.validateArray(this.accessConfigurationProvisionings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

