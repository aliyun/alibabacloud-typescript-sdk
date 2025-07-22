// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The Autonomous System (AS) path of the route.
   * 
   * @example
   * [64993,64512]
   */
  asPath?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The community value that is carried in the Border Gateway Protocol (BGP) route.
   * 
   * @example
   * 9001:9263
   */
  community?: string;
  /**
   * @remarks
   * The destination CIDR block of the route that you want to query.
   * 
   * @example
   * 172.20.47.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ECR ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The maximum number of entries to read. Valid values: 1 to 2147483647. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the next-hop instance.
   * 
   * @example
   * br-hp3u4u5f03tfuljis****
   */
  nexthopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the ECR.
   * 
   * @example
   * cn-hangzhou
   */
  queryRegionId?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

