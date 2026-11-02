// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessConfigurationProvisioningsRequest extends $dara.Model {
  /**
   * @remarks
   * The access configuration ID used as a filter condition for the query.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 20.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to return the next page of query results. You do not need to specify NextToken when you call this operation for the first time.
   * 
   * When you call this operation for the first time, if the total number of returned entries exceeds the value of MaxResults, the returned results are truncated. Only the number of entries specified by MaxResults is returned, the IsTruncated parameter is set to true, and a NextToken is returned. You can use the returned NextToken to call this operation again to query the truncated entries while keeping other request parameters unchanged. You can repeat this process until IsTruncated is set to false, which indicates that all entries are returned.
   * 
   * @example
   * K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****
   */
  nextToken?: string;
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
   * The provisioning status used as a filter condition for the query. Valid values:
   * 
   * - Provisioned: The provisioning succeeded.
   * - ReprovisionRequired: Reprovisioning is required.
   * - DeprovisionFailed: The provisioning failed.
   * 
   * @example
   * Provisioned
   */
  provisioningStatus?: string;
  /**
   * @remarks
   * The target ID used as a filter condition for the query.
   * 
   * > You must specify both TargetId and TargetType for them to take effect as filter conditions.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The target type used as a filter condition for the query.
   * 
   * Valid values:
   * - RD-Account: The target is an account in a resource directory.
   * 
   * > You must specify both TargetId and TargetType for them to take effect as filter conditions.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      originTargetId: 'OriginTargetId',
      provisioningStatus: 'ProvisioningStatus',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      originTargetId: 'string',
      provisioningStatus: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

