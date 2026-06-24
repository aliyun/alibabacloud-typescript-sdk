// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeliverToUserSlsRequestDeliveryScopes extends $dara.Model {
  /**
   * @remarks
   * product type
   * 
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
   * List of delivery scopes
   * 
   * This parameter is required.
   * 
   * @example
   * [{"productType":"China_China"}]
   */
  deliveryScopes?: DeliverToUserSlsRequestDeliveryScopes[];
  /**
   * @remarks
   * Existing Simple Log Service project name; either this or ProjectName is required
   * 
   * @example
   * elastic-desktop-xxx
   */
  existedProjectName?: string;
  /**
   * @remarks
   * LogStore name
   * 
   * @example
   * elastic_desktop_xxx
   */
  logStoreName?: string;
  /**
   * @remarks
   * Simple Log Service project name; either this or ExistedProjectName is required
   * 
   * @example
   * elastic-desktop-xxx
   */
  projectName?: string;
  /**
   * @remarks
   * Region ID of Simple Log Service
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * Data retention period (Day), default 30
   * 
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

