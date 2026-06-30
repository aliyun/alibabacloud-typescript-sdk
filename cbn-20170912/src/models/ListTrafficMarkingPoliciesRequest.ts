// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficMarkingPoliciesRequest extends $dara.Model {
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
   * The token that is used for the next query. Valid values:
   * 
   * - You do not need to specify this parameter for the first query.
   * 
   * - If a next query is to be sent, set the value to the **NextToken** value returned from the last API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The description of the traffic marking policy.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * desctest
   */
  trafficMarkingPolicyDescription?: string;
  /**
   * @remarks
   * The ID of the traffic marking policy.
   * 
   * @example
   * tm-iz5egnyitxiroq****
   */
  trafficMarkingPolicyId?: string;
  /**
   * @remarks
   * The name of the traffic marking policy.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * nametest
   */
  trafficMarkingPolicyName?: string;
  /**
   * @remarks
   * The ID of the TransitRouter instance.
   * 
   * @example
   * tr-bp1rmwxnk221e3fas****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

