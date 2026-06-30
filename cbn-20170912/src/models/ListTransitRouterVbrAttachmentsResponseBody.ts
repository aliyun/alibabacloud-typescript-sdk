// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachmentsTags extends $dara.Model {
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
   * value_A1
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

export class ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachments extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Enterprise Edition transit router automatically advertises routes to the VBR.
   * 
   * - **false**: no.
   * 
   * - **true**: yes.
   * 
   * @example
   * false
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
   * The time when the VBR connection was created.
   * 
   * The time is displayed in the YYYY-MM-DDThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-15T15:20Z
   */
  creationTime?: string;
  managedService?: string;
  /**
   * @remarks
   * The payer for the network instance. Valid values:
   * 
   * - **PayByCenOwner**: The connection fee and data transfer fee for the VBR are paid by the account that owns the transit router.
   * 
   * - **PayByResourceOwner**: The connection fee and data transfer fee for the VBR are paid by the account that owns the VBR.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The resource type of the connection.
   * 
   * The value is set to **VBR**, which indicates a VBR instance.
   * 
   * @example
   * VBR
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the VBR connection.
   * 
   * - **Attached**: The connection is established.
   * 
   * - **Attaching**: The connection is being established.
   * 
   * - **Detaching**: The connection is being removed.
   * 
   * @example
   * Attached
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachmentsTags[];
  /**
   * @remarks
   * The description of the VBR connection.
   * 
   * @example
   * testdesc
   */
  transitRouterAttachmentDescription?: string;
  /**
   * @remarks
   * The ID of the VBR connection.
   * 
   * @example
   * tr-attach-oyf70wfuorwx87****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The name of the VBR connection.
   * 
   * @example
   * testa
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
   * The VBR ID.
   * 
   * @example
   * vbr-bp1svadp4lq38janc****
   */
  vbrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR belongs.
   * 
   * @example
   * 1688111111111111
   */
  vbrOwnerId?: number;
  /**
   * @remarks
   * The ID of the region where the VBR is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPublishRouteEnabled: 'AutoPublishRouteEnabled',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      managedService: 'ManagedService',
      orderType: 'OrderType',
      resourceType: 'ResourceType',
      status: 'Status',
      tags: 'Tags',
      transitRouterAttachmentDescription: 'TransitRouterAttachmentDescription',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterAttachmentName: 'TransitRouterAttachmentName',
      transitRouterId: 'TransitRouterId',
      vbrId: 'VbrId',
      vbrOwnerId: 'VbrOwnerId',
      vbrRegionId: 'VbrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishRouteEnabled: 'boolean',
      cenId: 'string',
      creationTime: 'string',
      managedService: 'string',
      orderType: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachmentsTags },
      transitRouterAttachmentDescription: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterAttachmentName: 'string',
      transitRouterId: 'string',
      vbrId: 'string',
      vbrOwnerId: 'number',
      vbrRegionId: 'string',
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

export class ListTransitRouterVbrAttachmentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query.
   * 
   * - If this parameter is empty, no more data is returned.
   * 
   * - If a value is returned for this parameter, it is the token that you can use to retrieve the next page of results.
   * 
   * @example
   * dd20****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F42D9616-29EB-4E75-8CA8-9654D4E07501
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of VBR connections.
   */
  transitRouterAttachments?: ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachments[];
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
      transitRouterAttachments: { 'type': 'array', 'itemType': ListTransitRouterVbrAttachmentsResponseBodyTransitRouterAttachments },
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

