// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the response is displayed. Values: zh (default): Chinese, en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Target resource group
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm34x43l*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource ID, which is the ID of the registration and configuration center instance or the unique ID of the gateway
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-xxxxxxxxxxx，
   * gw-xxxxxxxxxxxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * Region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * Resource type, such as a registration and configuration center cluster or gateway instance
   * 
   * @example
   * Cluster,Gateway
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      resourceGroupId: 'string',
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

