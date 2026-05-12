// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeliverToUserSlsRequestDeliveryScopes extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudBrowser
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliverToUserSlsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"productType":"China_China"}]
   */
  deliveryScopes?: DeliverToUserSlsRequestDeliveryScopes[];
  /**
   * @example
   * elastic-desktop-xxx
   */
  existedProjectName?: string;
  /**
   * @example
   * elastic_desktop_xxx
   */
  logStoreName?: string;
  /**
   * @example
   * elastic-desktop-xxx
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryScopes: 'DeliveryScopes',
      existedProjectName: 'ExistedProjectName',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      slsRegionId: 'SlsRegionId',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryScopes: { 'type': 'array', 'itemType': DeliverToUserSlsRequestDeliveryScopes },
      existedProjectName: 'string',
      logStoreName: 'string',
      projectName: 'string',
      slsRegionId: 'string',
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

