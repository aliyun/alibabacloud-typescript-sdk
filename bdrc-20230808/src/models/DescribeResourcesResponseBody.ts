// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The amount of data in the Archive storage class.
   * 
   * @example
   * 0
   */
  archiveDataSize?: number;
  /**
   * @remarks
   * The number of failed check items.
   * 
   * @example
   * 0
   */
  checkFailedCount?: number;
  /**
   * @remarks
   * The amount of data in the Cold Archive storage class.
   * 
   * @example
   * 0
   */
  coldArchiveDataSize?: number;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the resource was created.
   * 
   * @example
   * 1697798340
   */
  createTime?: number;
  /**
   * @remarks
   * The data redundancy type.
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * Indicates whether data protection scoring is enabled for the resource.
   * 
   * @example
   * 0
   */
  enableCheck?: boolean;
  /**
   * @remarks
   * The amount of data in the Infrequent Access (IA) storage class.
   * 
   * @example
   * 0
   */
  iaDataSize?: number;
  /**
   * @remarks
   * The type of the cloud service.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The data protection score of the resource.
   * 
   * @example
   * 0
   */
  protectionScore?: number;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the score was last updated.
   * 
   * @example
   * 0
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The unique resource ARN.
   * 
   * @example
   * acs:ecs:cn-hangzhou:xxxxxxxx:instance/xxxxx
   */
  resourceArn?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-xxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * test server
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource owner ID.
   * 
   * @example
   * 123***7890
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of check items with potential risks.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The amount of data in the Standard storage class.
   * 
   * @example
   * 0
   */
  standardDataSize?: number;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the resource.
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The total amount of data.
   * 
   * @example
   * 0
   */
  totalDataSize?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-xxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      archiveDataSize: 'ArchiveDataSize',
      checkFailedCount: 'CheckFailedCount',
      coldArchiveDataSize: 'ColdArchiveDataSize',
      createTime: 'CreateTime',
      dataRedundancyType: 'DataRedundancyType',
      enableCheck: 'EnableCheck',
      iaDataSize: 'IaDataSize',
      productType: 'ProductType',
      protectionScore: 'ProtectionScore',
      protectionScoreUpdatedTime: 'ProtectionScoreUpdatedTime',
      regionId: 'RegionId',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      riskCount: 'RiskCount',
      standardDataSize: 'StandardDataSize',
      status: 'Status',
      storageClass: 'StorageClass',
      totalDataSize: 'TotalDataSize',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDataSize: 'number',
      checkFailedCount: 'number',
      coldArchiveDataSize: 'number',
      createTime: 'number',
      dataRedundancyType: 'string',
      enableCheck: 'boolean',
      iaDataSize: 'number',
      productType: 'string',
      protectionScore: 'number',
      protectionScoreUpdatedTime: 'number',
      regionId: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      riskCount: 'number',
      standardDataSize: 'number',
      status: 'string',
      storageClass: 'string',
      totalDataSize: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned resources.
   */
  content?: DescribeResourcesResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of resources to return on each page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token to retrieve the next page of results. If this parameter is empty, all results have been returned.
   * 
   * @example
   * fb836242f4225fa0f0e0257362dfc6dd
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of resources that match the query criteria. This parameter is optional and is not returned by default.
   * 
   * @example
   * 149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeResourcesResponseBodyDataContent },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeResourcesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 700683DE-0154-56D4-8D76-3B7A2C2C7DF9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

