// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeliveryChannelResponseBodyDeliveryChannelFilter extends $dara.Model {
  /**
   * @remarks
   * The resource types that are delivered.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Object Storage Service (OSS) bucket to which oversized data is delivered.
   * 
   * @example
   * acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss
   */
  oversizedDataOssTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      oversizedDataOssTargetArn: 'OversizedDataOssTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversizedDataOssTargetArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryChannelResponseBodyResourceChangeDelivery extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to deliver resource configuration changes.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) configurations.
   */
  slsProperties?: GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties;
  /**
   * @remarks
   * The ARN of the delivery destination.
   * 
   * @example
   * acs:log:cn-hangzhou: 1911422487776***:project/delivery/logstore/resourcecenter-sls
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the delivery destination.
   * 
   * @example
   * SLS
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'string',
      slsProperties: GetDeliveryChannelResponseBodyResourceChangeDeliverySlsProperties,
      targetArn: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(this.slsProperties && typeof (this.slsProperties as any).validate === 'function') {
      (this.slsProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryChannelResponseBodyResourceSnapshotDeliverySlsProperties extends $dara.Model {
  /**
   * @remarks
   * The ARN of the OSS bucket to which oversized data is delivered.
   * 
   * @example
   * acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss
   */
  oversizedDataOssTargetArn?: string;
  static names(): { [key: string]: string } {
    return {
      oversizedDataOssTargetArn: 'OversizedDataOssTargetArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oversizedDataOssTargetArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryChannelResponseBodyResourceSnapshotDelivery extends $dara.Model {
  /**
   * @remarks
   * The custom expression.
   * 
   * @example
   * select * from resources limit 100;
   */
  customExpression?: string;
  /**
   * @remarks
   * The time when resource snapshots are delivered.
   * 
   * @example
   * 09:00Z
   */
  deliveryTime?: string;
  /**
   * @remarks
   * Indicates whether to enable the scheduled delivery of resource snapshots.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  enabled?: string;
  /**
   * @remarks
   * The SLS configurations.
   */
  slsProperties?: GetDeliveryChannelResponseBodyResourceSnapshotDeliverySlsProperties;
  /**
   * @remarks
   * The ARN of the delivery destination.
   * 
   * @example
   * acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the delivery destination.
   * 
   * @example
   * OSS
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      customExpression: 'CustomExpression',
      deliveryTime: 'DeliveryTime',
      enabled: 'Enabled',
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExpression: 'string',
      deliveryTime: 'string',
      enabled: 'string',
      slsProperties: GetDeliveryChannelResponseBodyResourceSnapshotDeliverySlsProperties,
      targetArn: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(this.slsProperties && typeof (this.slsProperties as any).validate === 'function') {
      (this.slsProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeliveryChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the delivery channel.
   * 
   * @example
   * This is a description.
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The effective scope of the delivery channel.
   */
  deliveryChannelFilter?: GetDeliveryChannelResponseBodyDeliveryChannelFilter;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * dc-6q79dm4o9***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * test-delivery-channel
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17502A1B-7026-5551-8E1C-CCABD0CBC***
   */
  requestId?: string;
  /**
   * @remarks
   * The settings for delivering resource configuration changes.
   */
  resourceChangeDelivery?: GetDeliveryChannelResponseBodyResourceChangeDelivery;
  /**
   * @remarks
   * The settings for the scheduled delivery of resource snapshots.
   */
  resourceSnapshotDelivery?: GetDeliveryChannelResponseBodyResourceSnapshotDelivery;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelFilter: 'DeliveryChannelFilter',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      requestId: 'RequestId',
      resourceChangeDelivery: 'ResourceChangeDelivery',
      resourceSnapshotDelivery: 'ResourceSnapshotDelivery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelDescription: 'string',
      deliveryChannelFilter: GetDeliveryChannelResponseBodyDeliveryChannelFilter,
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      requestId: 'string',
      resourceChangeDelivery: GetDeliveryChannelResponseBodyResourceChangeDelivery,
      resourceSnapshotDelivery: GetDeliveryChannelResponseBodyResourceSnapshotDelivery,
    };
  }

  validate() {
    if(this.deliveryChannelFilter && typeof (this.deliveryChannelFilter as any).validate === 'function') {
      (this.deliveryChannelFilter as any).validate();
    }
    if(this.resourceChangeDelivery && typeof (this.resourceChangeDelivery as any).validate === 'function') {
      (this.resourceChangeDelivery as any).validate();
    }
    if(this.resourceSnapshotDelivery && typeof (this.resourceSnapshotDelivery as any).validate === 'function') {
      (this.resourceSnapshotDelivery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

