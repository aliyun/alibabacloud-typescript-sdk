// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets extends $dara.Model {
  /**
   * @remarks
   * The publish status of the route entry in the publish target.
   * 
   * @example
   * Published
   */
  publishStatus?: string;
  /**
   * @remarks
   * The instance ID of the route publish target.
   * 
   * @example
   * ecr-xvuqdfma6x57ei****
   */
  publishTargetInstanceId?: string;
  /**
   * @remarks
   * The route publish target.
   * 
   * @example
   * ECR
   */
  publishTargetType?: string;
  static names(): { [key: string]: string } {
    return {
      publishStatus: 'PublishStatus',
      publishTargetInstanceId: 'PublishTargetInstanceId',
      publishTargetType: 'PublishTargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishStatus: 'string',
      publishTargetInstanceId: 'string',
      publishTargetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPublishedRouteEntriesResponseBodyRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * rte-bp1mnnr2al0naomnpv****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The list of publish status information for the route entry in publish targets.
   */
  routePublishTargets?: ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets[];
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * vtb-2ze3jgygk9bmsj23s****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      routeEntryId: 'RouteEntryId',
      routePublishTargets: 'RoutePublishTargets',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      routeEntryId: 'string',
      routePublishTargets: { 'type': 'array', 'itemType': ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets },
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routePublishTargets)) {
      $dara.Model.validateArray(this.routePublishTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcPublishedRouteEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** has a value, the value indicates the token for the next query.
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
   * 1D0971B2-A35A-42C1-A44C-E91360C36C0B
   */
  requestId?: string;
  /**
   * @remarks
   * The list of route entry publish status information.
   */
  routeEntries?: ListVpcPublishedRouteEntriesResponseBodyRouteEntries[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntries: 'RouteEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntries: { 'type': 'array', 'itemType': ListVpcPublishedRouteEntriesResponseBodyRouteEntries },
    };
  }

  validate() {
    if(Array.isArray(this.routeEntries)) {
      $dara.Model.validateArray(this.routeEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

