// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindConfigGroupRequestResourceInfos extends $dara.Model {
  /**
   * @remarks
   * The service type of the resource.
   * 
   * Valid value:
   * 
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * ecd-1bo4xotjvwyon****
   */
  resourceId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * Valid values:
   * 
   * *   RESOURCE_GROUP: the resource group
   * *   CLOUD_DESKTOP: the cloud computer service.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      productType: 'ProductType',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productType: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

