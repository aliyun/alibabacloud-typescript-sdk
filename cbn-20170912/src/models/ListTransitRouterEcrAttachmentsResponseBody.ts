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
   * Indicates whether the Enterprise Edition transit router can automatically advertise routes to ECRs.
   * 
   * The value is **true**, which indicates that the Enterprise Edition transit router can automatically advertise routes to ECRs.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the ECR connection was created.
   * 
   * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-15T02:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the ECR with which the ECR connection is associated.
   * 
   * @example
   * ecr-n78omt2qsko06y****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the ECR connection belongs.
   * 
   * @example
   * 1688111111111111
   */
  ecrOwnerId?: number;
  /**
   * @remarks
   * The entity that pays the fees of the network instance. Valid values: Valid values:
   * 
   * *   **PayByCenOwner**: The Alibaba Cloud account to which the transit router belongs pays the connection and data forwarding fees of the ECR.
   * *   **PayByResourceOwner**: The Alibaba Cloud account to which the ECR belongs pays the connection and data forwarding fees of the ECR.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The type of resource to which the transit router is connected. Valid values:
   * 
   * The value is **ECR**, which indicates ECR connections.
   * 
   * @example
   * ECR
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the ECR connection. Valid values:
   * 
   * *   **Attached**
   * *   **Attaching**
   * *   **Detaching**
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * The tags.
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
   * The ID of the ECR connection.
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
   * The ID of the Enterprise Edition transit router.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the ECR connections.
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

