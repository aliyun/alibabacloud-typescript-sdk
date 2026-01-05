// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateInstanceRequestTags extends $dara.Model {
  /**
   * @example
   * dataset_version
   */
  key?: string;
  /**
   * @example
   * v0.1.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30.0G
   */
  capacity?: string;
  /**
   * @example
   * xgboost数据集加速实例
   */
  description?: string;
  /**
   * @example
   * 20
   */
  maxEndpoint?: string;
  /**
   * @example
   * 20
   */
  maxSlot?: string;
  /**
   * @example
   * acc_instance_1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @example
   * OSS
   */
  storageType?: string;
  tags?: CreateInstanceRequestTags[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      description: 'Description',
      maxEndpoint: 'MaxEndpoint',
      maxSlot: 'MaxSlot',
      name: 'Name',
      paymentType: 'PaymentType',
      providerType: 'ProviderType',
      storageType: 'StorageType',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      description: 'string',
      maxEndpoint: 'string',
      maxSlot: 'string',
      name: 'string',
      paymentType: 'string',
      providerType: 'string',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': CreateInstanceRequestTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

