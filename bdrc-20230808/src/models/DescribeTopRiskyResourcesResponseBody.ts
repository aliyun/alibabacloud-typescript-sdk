// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopRiskyResourcesResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The size of data in the Archive storage class, in bytes.
   * 
   * @example
   * 0
   */
  archiveDataSize?: number;
  /**
   * @remarks
   * The number of checks that failed.
   * 
   * @example
   * 0
   */
  checkFailedCount?: number;
  /**
   * @remarks
   * The size of data in the Cold Archive storage class, in bytes.
   * 
   * @example
   * 0
   */
  coldArchiveDataSize?: number;
  /**
   * @remarks
   * The timestamp indicating when the resource was created.
   * 
   * @example
   * 1697798340
   */
  createTime?: number;
  /**
   * @remarks
   * The data redundancy type. For example, \\"LRS\\" (locally redundant storage).
   * 
   * @example
   * LRS
   */
  dataRedundancyType?: string;
  /**
   * @remarks
   * Indicates whether the data protection score assessment is enabled.
   * 
   * @example
   * true
   */
  enableCheck?: boolean;
  /**
   * @remarks
   * The size of data in the Infrequent Access (IA) storage class, in bytes.
   * 
   * @example
   * 0
   */
  iaDataSize?: number;
  /**
   * @remarks
   * The product type.
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
   * 90
   */
  protectionScore?: number;
  /**
   * @remarks
   * The timestamp when the protection score was last updated.
   * 
   * @example
   * 1726036498
   */
  protectionScoreUpdatedTime?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
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
   * The resource name.
   * 
   * @example
   * test-server
   */
  resourceName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
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
   * The number of identified risks.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The size of data in the Standard storage class, in bytes.
   * 
   * @example
   * 0
   */
  standardDataSize?: number;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the data. For example, \\"Standard\\".
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The total data size, in bytes.
   * 
   * @example
   * 0
   */
  totalDataSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-xxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-j
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

export class DescribeTopRiskyResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of resource objects.
   */
  content?: DescribeTopRiskyResourcesResponseBodyDataContent[];
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If this parameter is not returned, it indicates that all results have been returned.
   * 
   * @example
   * e557bc9a65fe22cb5e2a3b240f06b0de
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of matching entries. This parameter is optional and might not be returned in the response.
   * 
   * @example
   * 10
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
      content: { 'type': 'array', 'itemType': DescribeTopRiskyResourcesResponseBodyDataContent },
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

export class DescribeTopRiskyResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned in the response.
   */
  data?: DescribeTopRiskyResourcesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34081B20-C4C0-514F-93F6-8EEC3D1A587E
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
      data: DescribeTopRiskyResourcesResponseBodyData,
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

