// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionsResponseBodySubscriptionsDBInstances extends $dara.Model {
  DBInstanceId?: string;
  regionId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionsResponseBodySubscriptions extends $dara.Model {
  DBInstances?: DescribeSubscriptionsResponseBodySubscriptionsDBInstances[];
  mapping?: string;
  subscriptionDescription?: string;
  subscriptionId?: string;
  subscriptionStatus?: string;
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      mapping: 'Mapping',
      subscriptionDescription: 'SubscriptionDescription',
      subscriptionId: 'SubscriptionId',
      subscriptionStatus: 'SubscriptionStatus',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': DescribeSubscriptionsResponseBodySubscriptionsDBInstances },
      mapping: 'string',
      subscriptionDescription: 'string',
      subscriptionId: 'string',
      subscriptionStatus: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionsResponseBody extends $dara.Model {
  requestId?: string;
  subscriptions?: DescribeSubscriptionsResponseBodySubscriptions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscriptions: 'Subscriptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscriptions: { 'type': 'array', 'itemType': DescribeSubscriptionsResponseBodySubscriptions },
    };
  }

  validate() {
    if(Array.isArray(this.subscriptions)) {
      $dara.Model.validateArray(this.subscriptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

