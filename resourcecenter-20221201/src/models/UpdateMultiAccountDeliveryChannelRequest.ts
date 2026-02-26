// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultiAccountDeliveryChannelRequestDeliveryChannelFilter extends $dara.Model {
  /**
   * @remarks
   * The account scopes of the delivery channel.
   */
  accountScopes?: string[];
  /**
   * @remarks
   * The effective resource type of the delivery channel.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      accountScopes: 'AccountScopes',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopes: { 'type': 'array', 'itemType': 'string' },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.accountScopes)) {
      $dara.Model.validateArray(this.accountScopes);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties extends $dara.Model {
  /**
   * @remarks
   * The ARN of the delivery destination for oversized data.
   * 
   * If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You must enter the ARN of an OSS bucket that has a prefix of `resourcecenter-`.
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

export class UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable delivery of resource configuration change events. Valid values:
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
  slsProperties?: UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties;
  /**
   * @remarks
   * The ARN of the delivery destination. Valid values:
   * 
   * - If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a OSS bucket that has a prefix of `resourcecenter-`.
   * 
   * - If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a SLS Logstore that has a prefix of `resourcecenter-`.
   * 
   * @example
   * acs:log:cn-hangzhou: 1911422487776***:project/delivery/logstore/resourcecenter-sls
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the delivery destination.
   * 
   * Valid value: `SLS`.
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
      slsProperties: UpdateMultiAccountDeliveryChannelRequestResourceChangeDeliverySlsProperties,
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

export class UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDeliverySlsProperties extends $dara.Model {
  /**
   * @remarks
   * The ARN of the delivery destination for oversized data.
   * 
   * If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You must enter the ARN of an OSS bucket that has a prefix of `resourcecenter-`.
   * 
   * > This parameter takes effect only when you create a custom scheduled delivery task for resource snapshots. You do not need to specify this parameter when you create a standard scheduled delivery task for resource snapshots.
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

export class UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery extends $dara.Model {
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
   * The delivery time.
   * 
   * @example
   * 09:00Z
   */
  deliveryTime?: string;
  /**
   * @remarks
   * Specifies whether to enable scheduled delivery of resource snapshots. Valid values:
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
  slsProperties?: UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDeliverySlsProperties;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the delivery destination. Valid values:
   * 
   * - If you set `TargetType` to `OSS`, you must set `TargetArn` to the ARN of a OSS bucket that has a prefix of `resourcecenter-`. Example: `acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss`.
   * 
   * - If you set `TargetType` to `SLS`, you must set `TargetArn` to the ARN of a SLS Logstore that has a prefix of `resourcecenter-`. Example: `acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls`.
   * 
   * @example
   * acs:oss:cn-hangzhou:1911422487776***:resourcecenter-oss
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the delivery destination. Valid values:
   * 
   * - `OSS` for standard delivery
   * 
   * - `OSS` or `SLS` for custom delivery
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
      slsProperties: UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDeliverySlsProperties,
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

export class UpdateMultiAccountDeliveryChannelRequest extends $dara.Model {
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
  deliveryChannelFilter?: UpdateMultiAccountDeliveryChannelRequestDeliveryChannelFilter;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * This parameter is required.
   * 
   * @example
   * dc-4m6ffpkgu***
   */
  deliveryChannelId?: string;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * @example
   * test-multi-account-delivery-channel
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The configurations for delivery of resource configuration change events.
   */
  resourceChangeDelivery?: UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery;
  /**
   * @remarks
   * The configurations for scheduled delivery of resource snapshots.
   */
  resourceSnapshotDelivery?: UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelFilter: 'DeliveryChannelFilter',
      deliveryChannelId: 'DeliveryChannelId',
      deliveryChannelName: 'DeliveryChannelName',
      resourceChangeDelivery: 'ResourceChangeDelivery',
      resourceSnapshotDelivery: 'ResourceSnapshotDelivery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelDescription: 'string',
      deliveryChannelFilter: UpdateMultiAccountDeliveryChannelRequestDeliveryChannelFilter,
      deliveryChannelId: 'string',
      deliveryChannelName: 'string',
      resourceChangeDelivery: UpdateMultiAccountDeliveryChannelRequestResourceChangeDelivery,
      resourceSnapshotDelivery: UpdateMultiAccountDeliveryChannelRequestResourceSnapshotDelivery,
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

