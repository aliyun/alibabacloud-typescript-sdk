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
   * Specifies whether the Enterprise Edition transit router is configured to publish route entry to the ECR instance. Valid value:
   * 
   * - **true**: The transit router is configured to publish route entry.
   * 
   * @example
   * true
   */
  autoPublishRouteEnabled?: boolean;
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the ECR connection was created.
   * 
   * The time is displayed in UTC and follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format.
   * 
   * @example
   * 2021-06-15T02:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The associated Express Connect Router (ECR) instance ID.
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
   * - **PayByCenOwner**: The connection fee and data transfer fee of the ECR instance are paid by the account to which the transit router belongs.
   * - **PayByResourceOwner**: The connection fee and data transfer fee of the ECR instance are paid by the account to which the ECR instance belongs.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The resource type of the connection. Valid value:
   * 
   * - **ECR**: Express Connect Router (ECR) instance.
   * 
   * @example
   * ECR
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the ECR connection. Valid values:
   * 
   * - **Attached**: The connection is attached.
   * - **Attaching**: The connection is being attached.
   * - **Detaching**: The connection is being detached.
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
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region information represented by the region ID.
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
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query.
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

