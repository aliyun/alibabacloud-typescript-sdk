// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or member of the resource directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 1619302****
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * m-eb3hji****
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
   * This parameter is required.
   * 
   * @example
   * ACS::VPC::RouteTable
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

