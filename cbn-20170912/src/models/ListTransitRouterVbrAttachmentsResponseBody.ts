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
   * Indicates whether the Enterprise Edition forward routing automatically publishes route entries to the VBR instance. Valid values:
   * 
   * - **false**: The Enterprise Edition forward routing does not automatically publish route entries to the VBR instance.
   * - **true**: The Enterprise Edition forward routing automatically publishes route entries to the VBR instance.
   * 
   * @example
   * false
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
   * The time when the VBR connection was created.
   * 
   * The time is displayed in the ISO 8601 standard in UTC. Format: YYYY-MM-DDThh:mmZ.
   * 
   * @example
   * 2021-06-15T15:20Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cloud service that manages the VBR connection. This parameter is returned only when the VBR connection is managed by a cloud service. The standard code of the cloud service is returned. If the VBR connection is managed by you, this parameter is not returned.
   */
  managedService?: string;
  /**
   * @remarks
   * The payer of the network instance. Valid values:
   * 
   * - **PayByCenOwner**: The connection fee and data processing fee of the VBR instance are paid by the account to which the transit router instance belongs.
   * - **PayByResourceOwner**: The connection fee and data processing fee of the VBR instance are paid by the account to which the VBR instance belongs.
   * 
   * @example
   * PayByCenOwner
   */
  orderType?: string;
  /**
   * @remarks
   * The type of resource to which the connection belongs.
   * 
   * The value is **VBR**, which indicates a virtual border router instance.
   * 
   * @example
   * VBR
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the VBR connection. Valid values:
   * 
   * - **Attached**: The VBR connection is attached.
   * - **Attaching**: The VBR connection is being attached.
   * - **Detaching**: The VBR connection is being detached.
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
   * The Enterprise Edition forward routing instance ID.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The VBR instance ID.
   * 
   * @example
   * vbr-bp1svadp4lq38janc****
   */
  vbrId?: string;
  /**
   * @remarks
   * The ID of the account to which the VBR instance belongs.
   * 
   * @example
   * 1688111111111111
   */
  vbrOwnerId?: number;
  /**
   * @remarks
   * The region ID of the VBR instance.
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
   * The token that determines the start point of the query. Valid values:
   * 
   * - If this is the first query or no subsequent query is to be sent, you do not need to specify this parameter.
   * - If a subsequent query is to be sent, set the value to the NextToken value returned by the previous API call.
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
   * The list of VBR connections.
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

