// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCenInterRegionTrafficQosQueuesRequestEffectiveBandwidthFilter } from "./ListCenInterRegionTrafficQosQueuesRequestEffectiveBandwidthFilter";


export class ListCenInterRegionTrafficQosQueuesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter works based on the actual bandwidth. Enter a positive integer. Unit: Mbit/s.
   */
  effectiveBandwidthFilter?: ListCenInterRegionTrafficQosQueuesRequestEffectiveBandwidthFilter;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
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
   * The ID of the QoS policy.
   * 
   * @example
   * qos-rnghap5gc8155x****
   */
  trafficQosPolicyId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * qosQueueDescription
   */
  trafficQosQueueDescription?: string;
  /**
   * @remarks
   * The ID of the queue.
   * 
   * @example
   * qos-queue-siakjb2nn9gz5z****
   */
  trafficQosQueueId?: string;
  /**
   * @remarks
   * The name of the QoS queue.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with http:// or https://.
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
   * The ID of the transit router.
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

