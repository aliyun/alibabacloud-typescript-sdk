// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-bp1kyg72m****
   */
  resourceId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * For more information about the resource types supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

