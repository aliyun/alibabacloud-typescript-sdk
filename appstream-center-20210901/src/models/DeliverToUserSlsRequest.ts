// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeliverToUserSlsRequestDeliveryScopes extends $dara.Model {
  /**
   * @remarks
   * The product type to which the logs belong. Specify the product type for which you want to enable log delivery. For example, `CloudBrowser` indicates Cloud Browser.
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
   * The list of product scopes for which delivery needs to be configured. Specify at least one item. You cannot create duplicate enabled delivery configurations for the same account and product type.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ProductType":"CloudBrowser"}]
   */
  deliveryScopes?: DeliverToUserSlsRequestDeliveryScopes[];
  /**
   * @remarks
   * The name of an existing SLS project. The name must start with `elastic-desktop-` and the project must already exist in the specified SLS region of the current account.
   * 
   * Specify either this parameter or `ProjectName`.
   * 
   * @example
   * elastic-desktop-audit
   */
  existedProjectName?: string;
  /**
   * @remarks
   * The name of the destination Logstore. The name must start with `elastic_desktop_`. If the Logstore does not exist, it is created. If the Logstore already exists, it is reused.
   * 
   * If this parameter is not specified, the part after `elastic-desktop-` in the selected project name is used as a suffix to generate a name that starts with `elastic_desktop_`. For example, if the project name is `elastic-desktop-audit`, the default Logstore name is `elastic_desktop_audit`.
   * 
   * @example
   * elastic_desktop_audit
   */
  logStoreName?: string;
  /**
   * @remarks
   * The name of the SLS project to be created or reused. The name must start with `elastic-desktop-`.
   * 
   * Specify either this parameter or `ExistedProjectName`. If the project does not exist, it is created. If the project already exists, it is reused.
   * 
   * @example
   * elastic-desktop-audit
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the region where the destination SLS project is located. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The data retention period of the new Logstore. Unit: days.
   * 
   * **Valid values:** 1 to 3650.
   * 
   * **Default value:** 30.
   * 
   * If an existing Logstore is reused, this operation does not update its data retention period.
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

