// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenInterRegionTrafficQosQueuesRequestEffectiveBandwidthFilter extends $dara.Model {
  /**
   * @remarks
   * The actual effective bandwidth is greater than or equal to the specified bandwidth value.
   * 
   * @example
   * 50
   */
  gte?: number;
  /**
   * @remarks
   * The actual effective bandwidth is less than or equal to the specified bandwidth value.
   * 
   * @example
   * 20
   */
  lte?: number;
  static names(): { [key: string]: string } {
    return {
      gte: 'Gte',
      lte: 'Lte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gte: 'number',
      lte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenInterRegionTrafficQosQueuesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters results by the actual effective bandwidth value. Only positive integers are allowed. Unit: Mbit/s.
   */
  effectiveBandwidthFilter?: ListCenInterRegionTrafficQosQueuesRequestEffectiveBandwidthFilter;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If a value is returned for **NextToken**, the value indicates the token that is used for the next query.
   * 
   * @example
   * 2ca1ed1573cb****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the traffic scheduling policy.
   * 
   * @example
   * qos-rnghap5gc8155x****
   */
  trafficQosPolicyId?: string;
  /**
   * @remarks
   * The description of the traffic scheduling policy queue.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * qosQueueDescription
   */
  trafficQosQueueDescription?: string;
  /**
   * @remarks
   * The ID of the traffic scheduling policy queue.
   * 
   * @example
   * qos-queue-siakjb2nn9gz5z****
   */
  trafficQosQueueId?: string;
  /**
   * @remarks
   * The name of the traffic scheduling policy queue.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * qosQueueName
   */
  trafficQosQueueName?: string;
  /**
   * @remarks
   * The ID of the inter-region connection.
   * 
   * @example
   * tr-attach-a6p8voaodog5c0****
   */
  transitRouterAttachmentId?: string;
  /**
   * @remarks
   * The ID of the transit router instance.
   * 
   * @example
   * tr-bp1rmwxnk221e3fas****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveBandwidthFilter: 'EffectiveBandwidthFilter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficQosPolicyId: 'TrafficQosPolicyId',
      trafficQosQueueDescription: 'TrafficQosQueueDescription',
      trafficQosQueueId: 'TrafficQosQueueId',
      trafficQosQueueName: 'TrafficQosQueueName',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveBandwidthFilter: ListCenInterRegionTrafficQosQueuesRequestEffectiveBandwidthFilter,
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficQosPolicyId: 'string',
      trafficQosQueueDescription: 'string',
      trafficQosQueueId: 'string',
      trafficQosQueueName: 'string',
      transitRouterAttachmentId: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    if(this.effectiveBandwidthFilter && typeof (this.effectiveBandwidthFilter as any).validate === 'function') {
      (this.effectiveBandwidthFilter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

