// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateOrderRequestDynamicProductParamsInputActivateConfig extends $dara.Model {
  cityName?: string;
  desktopName?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      cityName: 'CityName',
      desktopName: 'DesktopName',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityName: 'string',
      desktopName: 'string',
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequestDynamicProductParams extends $dara.Model {
  amount?: number;
  deliveryAddress?: string;
  dynamicAttributes?: { [key: string]: string };
  inputActivateConfig?: CreateOrderRequestDynamicProductParamsInputActivateConfig;
  instanceIdList?: string[];
  linkedResourceId?: string;
  packageCode?: string;
  productCode?: string;
  productSkuCode?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      deliveryAddress: 'DeliveryAddress',
      dynamicAttributes: 'DynamicAttributes',
      inputActivateConfig: 'InputActivateConfig',
      instanceIdList: 'InstanceIdList',
      linkedResourceId: 'LinkedResourceId',
      packageCode: 'PackageCode',
      productCode: 'ProductCode',
      productSkuCode: 'ProductSkuCode',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      deliveryAddress: 'string',
      dynamicAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      inputActivateConfig: CreateOrderRequestDynamicProductParamsInputActivateConfig,
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      linkedResourceId: 'string',
      packageCode: 'string',
      productCode: 'string',
      productSkuCode: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    if(this.dynamicAttributes) {
      $dara.Model.validateMap(this.dynamicAttributes);
    }
    if(this.inputActivateConfig && typeof (this.inputActivateConfig as any).validate === 'function') {
      (this.inputActivateConfig as any).validate();
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  autoPay?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  dynamicProductParams?: CreateOrderRequestDynamicProductParams[];
  /**
   * @remarks
   * This parameter is required.
   */
  operationType?: string;
  orderFrom?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      autoPay: 'AutoPay',
      dynamicProductParams: 'DynamicProductParams',
      operationType: 'OperationType',
      orderFrom: 'OrderFrom',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      autoPay: 'boolean',
      dynamicProductParams: { 'type': 'array', 'itemType': CreateOrderRequestDynamicProductParams },
      operationType: 'string',
      orderFrom: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicProductParams)) {
      $dara.Model.validateArray(this.dynamicProductParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

