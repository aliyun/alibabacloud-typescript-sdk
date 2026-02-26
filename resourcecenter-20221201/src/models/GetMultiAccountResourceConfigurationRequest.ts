// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account or member.
   * 
   * This parameter is required.
   * 
   * @example
   * 1619302****
   */
  accountId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-eb3hji****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the region where the resource resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type.
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

