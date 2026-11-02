// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings extends $dara.Model {
  /**
   * @remarks
   * The access configuration ID.
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
   * The time when the first provisioning succeeded. The time is displayed in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2021-07-26T08:54:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the provisioning target.
   * 
   * @example
   * 114240524784****
   */
  originTargetId?: string;
  /**
   * @remarks
   * The Policy Name of the custom policy created in the account in a resource directory.
   */
  RAMPolicyNames?: string[];
  /**
   * @remarks
   * The name of the RAM role created in the account in a resource directory.
   * 
   * @example
   * AliyunReservedSSO-VPC-Admin
   */
  RAMRoleName?: string;
  /**
   * @remarks
   * The name of the SAML IdP created in the account in a resource directory.
   * 
   * @example
   * AliyunReservedSSO-d-00fc2p61****
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The provisioning status. Valid values:
   * 
   * - Provisioned: The provisioning succeeded.
   * - ReprovisionRequired: Reprovisioning is required.
   * - DeprovisionFailed: The provisioning failed.
   * 
   * @example
   * Provisioned
   */
  status?: string;
  /**
   * @remarks
   * The target ID.
   * 
   * If the target type is RD-Account, this parameter indicates the UID of the account in a resource directory.
   * 
   * @example
   * 101522521960****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the target.
   * 
   * @example
   * SharedServices_5009****
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the target in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the target in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The target type.
   * 
   * Valid values:
   * - RD-Account: The target is an account in a resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The time when the latest provisioning succeeded. The time is displayed in UTC and follows the RFC 3339 standard in the YYYY-MM-DDTHH:mm:ssZ format.
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
   * The list of access configuration provisionings.
   */
  accessConfigurationProvisionings?: ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings[];
  /**
   * @remarks
   * Indicates whether the returned results are truncated. Valid values:
   * 
   * - true: The results are truncated.
   * - false: The results are not truncated.
   * 
   * @example
   * false
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to return the next page of query results.
   * 
   * > This parameter is returned only when IsTruncated is set to true.
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
   * The total number of entries that meet the filter conditions specified in the request parameters.
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

