// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFailoverTestJobsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **JobId**: the failover test job ID.
   * 
   * - **JobName**: the failover test job name.
   * 
   * - **JobStatus**: the failover test job status.
   * 
   * - **ResourceId**: the failover test resource ID.
   * 
   * - **ResourceName**: the failover test resource name.
   * 
   * - **ResourceType**: the failover test resource type.
   * 
   * > You can specify up to 5 unique filter conditions. If you specify a resource ID or resource name, you must also specify the resource type. All filter conditions must be met to return accurate query results.
   * 
   * @example
   * JobId
   */
  key?: string;
  /**
   * @remarks
   * The filter values that correspond to the filter condition.
   * 
   * > Each filter condition can contain up to 5 filter values. These filter values use the OR logic. A record is considered a match if it matches any one of the filter values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFailoverTestJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The filter information.
   */
  filter?: DescribeFailoverTestJobsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page for a paginated query. Valid values: **1** to **100**. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - Leave this parameter empty for the first query or if no subsequent query is required.
   * 
   * - If a subsequent query is required, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the failover test jobs reside.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      filter: { 'type': 'array', 'itemType': DescribeFailoverTestJobsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

