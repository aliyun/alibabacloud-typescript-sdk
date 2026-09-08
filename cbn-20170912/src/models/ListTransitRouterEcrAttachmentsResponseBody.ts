// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterEcrAttachmentsResponseBodyTransitRouterAttachmentsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterEcrAttachmentsResponseBodyTransitRouterAttachments extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Enterprise Edition transit router automatically publishes route entries to the ECR instance.
   * 
   * The value is **true** only, which indicates that route entries are automatically published.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the ECR connection was created.
   * 
   * The time is displayed in the ISO 8601 standard in UTC. Format: YYYY-MM-DDThh:mmZ.
   * 
   * @example
   * 2021-06-15T02:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance ID of the associated Express Connect Router (ECR).
   * 
   * @example
   * ecr-n78omt2qsko06y****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECR instance belongs.
   * 
   * @example
   * 1210123456123456
   */
  ecrOwnerId?: number;
  /**
   * @remarks
   * The payer of the network instance. Valid values:
   * 
   * - **PayByCenOwner**: The connection fee and data processing fee of the ECR instance are paid by the account that owns the transit router instance.
   * - **PayByResourceOwner**: The connection fee and data processing fee of the ECR instance are paid by the account that owns the ECR instance.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The resource type of the connection.
   * 
   * The value is **ECR** only, which indicates an Express Connect Router (ECR) instance.
   * 
   * @example
   * ECR
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the ECR connection.
   * 
   * - **Attached**: attached.
   * - **Attaching**: being attached.
   * - **Detaching**: being detached.
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTransitRouterEcrAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  /**
   * @remarks
   * The description of the ECR connection.
   * 
   * @example
   * desctest
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ECR connection ID.
   * 
   * @example
   * tr-attach-nls9fzkfat8934****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The name of the ECR connection.
   * 
   * @example
   * testname
   */
  transitRouterAttachmentName?: string;
  /**
   * @remarks
   * The Enterprise Edition transit router instance ID.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region information corresponding to the region ID.
   * 
   * @example
   * cn-shanghai
   */
  transitRouterRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      ecrId: 'EcrId',
      ecrOwnerId: 'EcrOwnerId',
      orderType: 'OrderType',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      transitRouterRegionId: 'TransitRouterRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      creationTime: 'string',
      ecrId: 'string',
      ecrOwnerId: 'number',
      orderType: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterEcrAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      transitRouterRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterEcrAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next paged query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 461EC1B5-04A8-4706-8764-8F5BCEF48A6F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of ECR connection information.
   */
  transitRouterAttachments?: ListTransitRouterEcrAttachmentsResponseBodyTransitRouterAttachments[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterAttachments: 'TransitRouterAttachments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterEcrAttachmentsResponseBodyTransitRouterAttachments },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterAttachments)) {
      $dara.Model.validateArray(this.transitRouterAttachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

