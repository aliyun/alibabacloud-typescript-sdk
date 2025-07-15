// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets extends $dara.Model {
  /**
   * @remarks
   * The publishing status of the route entry in the publishing target.
   * 
   * @example
   * Published
   */
  publishStatus?: string;
  /**
   * @remarks
   * The ID of the route publishing target instance.
   * 
   * @example
   * ecr-xvuqdfma6x57ei****
   */
  publishTargetInstanceId?: string;
  /**
   * @remarks
   * The type of the route publishing target.
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
   * List of route entry publishing status information in the publishing targets.
   */
  routePublishTargets?: ListVpcPublishedRouteEntriesResponseBodyRouteEntriesRoutePublishTargets[];
  /**
   * @remarks
   * The ID of the route table.
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
   * Indicates whether there is a token for the next query. Values:
   * 
   * - If **NextToken** is empty, it means there is no next query.
   * - If **NextToken** has a return value, this value indicates the token for the start of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1D0971B2-A35A-42C1-A44C-E91360C36C0B
   */
  requestId?: string;
  /**
   * @remarks
   * List of route entry publishing status information.
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

