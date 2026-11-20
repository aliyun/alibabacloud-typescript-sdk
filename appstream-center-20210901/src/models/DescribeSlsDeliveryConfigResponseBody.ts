// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsDeliveryConfigResponseBodyDeliveryConfigsLogStoresDeliveryScopes extends $dara.Model {
  /**
   * @remarks
   * The product type of the delivery scope. For example, `WuyingServer` indicates Enterprise Edition workstations.
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @remarks
   * The current status of the delivery configuration. Valid values:
   * - `Stopped`: Delivery is stopped.
   * - `Enabled`: Delivery is enabled.
   * - `AbnormalLogstoreDeleted`: Delivery is abnormal because the destination Logstore is deleted.
   * - `AbnormalProjectDeleted`: Delivery is abnormal because the destination project is deleted.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsDeliveryConfigResponseBodyDeliveryConfigsLogStores extends $dara.Model {
  /**
   * @remarks
   * The product delivery scopes of the Logstore and the delivery status of each scope.
   */
  deliveryScopes?: DescribeSlsDeliveryConfigResponseBodyDeliveryConfigsLogStoresDeliveryScopes[];
  /**
   * @remarks
   * The name of the destination SLS Logstore.
   * 
   * @example
   * wuying-session-audit
   */
  logStoreName?: string;
  /**
   * @remarks
   * The data retention period configured for the destination Logstore, in days.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryScopes: 'DeliveryScopes',
      logStoreName: 'LogStoreName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryScopes: { 'type': 'array', 'itemType': DescribeSlsDeliveryConfigResponseBodyDeliveryConfigsLogStoresDeliveryScopes },
      logStoreName: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryScopes)) {
      $dara.Model.validateArray(this.deliveryScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsDeliveryConfigResponseBodyDeliveryConfigs extends $dara.Model {
  /**
   * @remarks
   * The list of Logstore delivery configurations under the project.
   */
  logStores?: DescribeSlsDeliveryConfigResponseBodyDeliveryConfigsLogStores[];
  /**
   * @remarks
   * The name of the destination SLS project.
   * 
   * @example
   * wuying-audit-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the region where the destination SLS project is located.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      logStores: 'LogStores',
      projectName: 'ProjectName',
      slsRegionId: 'SlsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStores: { 'type': 'array', 'itemType': DescribeSlsDeliveryConfigResponseBodyDeliveryConfigsLogStores },
      projectName: 'string',
      slsRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logStores)) {
      $dara.Model.validateArray(this.logStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlsDeliveryConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of delivery configurations that match the filter conditions. If no configurations match the conditions, an empty list is returned.
   */
  deliveryConfigs?: DescribeSlsDeliveryConfigResponseBodyDeliveryConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryConfigs: 'DeliveryConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryConfigs: { 'type': 'array', 'itemType': DescribeSlsDeliveryConfigResponseBodyDeliveryConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deliveryConfigs)) {
      $dara.Model.validateArray(this.deliveryConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

