// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlsDeliveryConfigRequestDeliveryScopes extends $dara.Model {
  /**
   * @remarks
   * The query condition for the product type to which the logs belong. If you specify this parameter, delivery scopes are filtered by the specified product type. The value must be consistent with the existing delivery configurations. For example, `WuyingServer` indicates Enterprise Edition workstations.
   * 
   * This parameter is required.
   * 
   * @example
   * WuyingServer
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

export class DescribeSlsDeliveryConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Filters delivery scopes by the product type to which the logs belong. If this parameter is omitted or an empty list is passed, delivery scopes are not filtered by product type.
   * 
   * @example
   * [{"ProductType":"WuyingServer"}]
   */
  deliveryScopes?: DescribeSlsDeliveryConfigRequestDeliveryScopes[];
  /**
   * @remarks
   * The name of the SLS Logstore. Exact match is used. If this parameter is omitted, delivery scopes are not filtered by Logstore name.
   * 
   * @example
   * wuying-session-audit
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the SLS project. Exact match is used. If this parameter is omitted, delivery scopes are not filtered by project name.
   * 
   * @example
   * wuying-audit-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the region where the SLS project is located. Exact match is used. If this parameter is omitted, delivery scopes are not filtered by region.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryScopes: 'DeliveryScopes',
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      slsRegionId: 'SlsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryScopes: { 'type': 'array', 'itemType': DescribeSlsDeliveryConfigRequestDeliveryScopes },
      logStoreName: 'string',
      projectName: 'string',
      slsRegionId: 'string',
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

