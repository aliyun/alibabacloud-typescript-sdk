// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel extends $dara.Model {
  accountId?: string;
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
      accountId: 'string',
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

export class GetAggregateConfigDeliveryChannelResponseBody extends $dara.Model {
  deliveryChannel?: GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryChannel: 'DeliveryChannel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannel: GetAggregateConfigDeliveryChannelResponseBodyDeliveryChannel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliveryChannel && typeof (this.deliveryChannel as any).validate === 'function') {
      (this.deliveryChannel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

