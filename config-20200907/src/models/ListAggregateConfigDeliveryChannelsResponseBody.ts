// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels extends $dara.Model {
  accountId?: number;
  aggregatorId?: string;
  compliantSnapshot?: boolean;
  configurationItemChangeNotification?: boolean;
  configurationSnapshot?: boolean;
  deliveryChannelAssumeRoleArn?: string;
  deliveryChannelCondition?: string;
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliveryChannelType?: string;
  deliverySnapshotTime?: string;
  description?: string;
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorId: 'AggregatorId',
      compliantSnapshot: 'CompliantSnapshot',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelAssumeRoleArn: 'DeliveryChannelAssumeRoleArn',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliveryChannelType: 'DeliveryChannelType',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorId: 'string',
      compliantSnapshot: 'boolean',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelAssumeRoleArn: 'string',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
      deliveryChannelType: 'string',
      deliverySnapshotTime: 'string',
      description: 'string',
      nonCompliantNotification: 'boolean',
      oversizedDataOSSTargetArn: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigDeliveryChannelsResponseBody extends $dara.Model {
  deliveryChannels?: ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannels: 'DeliveryChannels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannels: { 'type': 'array', 'itemType': ListAggregateConfigDeliveryChannelsResponseBodyDeliveryChannels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryChannels)) {
      $dara.Model.validateArray(this.deliveryChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

