// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregateConfigDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  clientToken?: string;
  /**
   * **if can be null:**
   * true
   */
  compliantSnapshot?: boolean;
  /**
   * **if can be null:**
   * true
   */
  configurationItemChangeNotification?: boolean;
  /**
   * **if can be null:**
   * true
   */
  configurationSnapshot?: boolean;
  deliveryChannelCondition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryChannelId?: string;
  deliveryChannelName?: string;
  deliveryChannelTargetArn?: string;
  deliverySnapshotTime?: string;
  description?: string;
  /**
   * **if can be null:**
   * true
   */
  nonCompliantNotification?: boolean;
  oversizedDataOSSTargetArn?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      clientToken: 'ClientToken',
      compliantSnapshot: 'CompliantSnapshot',
      configurationItemChangeNotification: 'ConfigurationItemChangeNotification',
      configurationSnapshot: 'ConfigurationSnapshot',
      deliveryChannelCondition: 'DeliveryChannelCondition',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      deliveryChannelTargetArn: 'DeliveryChannelTargetArn',
      deliverySnapshotTime: 'DeliverySnapshotTime',
      description: 'Description',
      nonCompliantNotification: 'NonCompliantNotification',
      oversizedDataOSSTargetArn: 'OversizedDataOSSTargetArn',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      clientToken: 'string',
      compliantSnapshot: 'boolean',
      configurationItemChangeNotification: 'boolean',
      configurationSnapshot: 'boolean',
      deliveryChannelCondition: 'string',
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      deliveryChannelTargetArn: 'string',
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

