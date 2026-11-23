// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The AS path traversed by the route entry.
   * 
   * @example
   * [64993,64512]
   */
  asPath?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value from your client to ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The community value carried by the BGP route entry.
   * 
   * @example
   * 9001:9263
   */
  community?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry to query.
   * 
   * @example
   * 172.20.4.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether it is a dry run for this request. Valid values:
   * 
   * - **true**: sends a check request and does not modify EPS resources.
   * 
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - For the first query or when no subsequent query is required, leave this parameter empty.
   * - If a subsequent query is required, set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The next hop instance ID.
   * 
   * @example
   * vbr-hp3u4u5f03tfuljis****
   */
  nexthopInstanceId?: string;
  /**
   * @remarks
   * The region where the Express Connect Router (ECR) instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  queryRegionId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      asPath: 'AsPath',
      clientToken: 'ClientToken',
      community: 'Community',
      destinationCidrBlock: 'DestinationCidrBlock',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nexthopInstanceId: 'NexthopInstanceId',
      queryRegionId: 'QueryRegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPath: 'string',
      clientToken: 'string',
      community: 'string',
      destinationCidrBlock: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nexthopInstanceId: 'string',
      queryRegionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

