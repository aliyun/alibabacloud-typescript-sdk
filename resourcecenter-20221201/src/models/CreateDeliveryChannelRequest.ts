// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeliveryChannelRequestDeliveryChannelFilter extends $dara.Model {
  /**
   * @remarks
   * The list of resource types to be delivered.
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

export class CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties extends $dara.Model {
  /**
   * @remarks
   * The ARN of the destination OSS bucket for oversized files.
   * 
   * If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the `resourcecenter-` prefix.
   * 
   * @example
   * acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss
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

export class CreateDeliveryChannelRequestResourceChangeDelivery extends $dara.Model {
  /**
   * @remarks
   * The SLS configurations.
   */
  slsProperties?: CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties;
  /**
   * @remarks
   * The ARN of the destination. Valid values:
   * 
   * - If you set `TargetType` to `OSS`, set `TargetArn` to the ARN of an OSS bucket that has the `resourcecenter-` prefix.
   * 
   * - If you set `TargetType` to `SLS`, set `TargetArn` to the ARN of an SLS Logstore that has the `resourcecenter-` prefix.
   * 
   * @example
   * acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the destination.
   * 
   * Valid value: `SLS`.
   * 
   * @example
   * SLS
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsProperties: CreateDeliveryChannelRequestResourceChangeDeliverySlsProperties,
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

export class CreateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties extends $dara.Model {
  /**
   * @remarks
   * The ARN of the destination OSS bucket for oversized files.
   * 
   * If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the `resourcecenter-` prefix.
   * 
   * > This parameter is valid only for custom scheduled delivery. You do not need to specify this parameter for standard scheduled delivery.
   * 
   * @example
   * acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss
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

export class CreateDeliveryChannelRequestResourceSnapshotDelivery extends $dara.Model {
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
   * The SLS configurations.
   */
  slsProperties?: CreateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the destination. Valid values:
   * 
   * - If you set `TargetType` to `OSS`, set `TargetArn` to the ARN of an Object Storage Service (OSS) bucket that has the `resourcecenter-` prefix. Example: `acs:oss:cn-hangzhou:191142248777****:resourcecenter-oss`.
   * 
   * - If you set `TargetType` to `SLS`, set `TargetArn` to the ARN of a Simple Log Service (SLS) Logstore that has the `resourcecenter-` prefix. Example: `acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls`.
   * 
   * @example
   * acs:log:cn-hangzhou: 191142248777****:project/delivery/logstore/resourcecenter-sls
   */
  targetArn?: string;
  /**
   * @remarks
   * The type of the destination. Valid values:
   * 
   * - For standard scheduled delivery, set this parameter to `OSS`.
   * 
   * - For custom scheduled delivery, set this parameter to `OSS` or `SLS`.
   * 
   * @example
   * OSS
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      customExpression: 'CustomExpression',
      deliveryTime: 'DeliveryTime',
      slsProperties: 'SlsProperties',
      targetArn: 'TargetArn',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customExpression: 'string',
      deliveryTime: 'string',
      slsProperties: CreateDeliveryChannelRequestResourceSnapshotDeliverySlsProperties,
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

export class CreateDeliveryChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the delivery channel.
   * 
   * @example
   * 测试投递
   */
  deliveryChannelDescription?: string;
  /**
   * @remarks
   * The effective scope of the delivery channel.
   * 
   * This parameter is required.
   */
  deliveryChannelFilter?: CreateDeliveryChannelRequestDeliveryChannelFilter;
  /**
   * @remarks
   * The name of the delivery channel.
   * 
   * This parameter is required.
   * 
   * @example
   * test-delivery
   */
  deliveryChannelName?: string;
  /**
   * @remarks
   * The delivery of resource configuration changes.
   */
  resourceChangeDelivery?: CreateDeliveryChannelRequestResourceChangeDelivery;
  /**
   * @remarks
   * The scheduled delivery of resource snapshots.
   */
  resourceSnapshotDelivery?: CreateDeliveryChannelRequestResourceSnapshotDelivery;
  static names(): { [key: string]: string } {
    return {
      deliveryChannelDescription: 'DeliveryChannelDescription',
      deliveryChannelFilter: 'DeliveryChannelFilter',
      deliveryChannelName: 'DeliveryChannelName',
      resourceChangeDelivery: 'ResourceChangeDelivery',
      resourceSnapshotDelivery: 'ResourceSnapshotDelivery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryChannelDescription: 'string',
      deliveryChannelFilter: CreateDeliveryChannelRequestDeliveryChannelFilter,
      deliveryChannelName: 'string',
      resourceChangeDelivery: CreateDeliveryChannelRequestResourceChangeDelivery,
      resourceSnapshotDelivery: CreateDeliveryChannelRequestResourceSnapshotDelivery,
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

