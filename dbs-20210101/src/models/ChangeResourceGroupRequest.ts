// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * dbs
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekz4kee6******
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1jyajqk******
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to backupplan.
   * 
   * This parameter is required.
   * 
   * @example
   * backupplan
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      newResourceGroupId: 'NewResourceGroupId',
      regionCode: 'RegionCode',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      newResourceGroupId: 'string',
      regionCode: 'string',
      resourceId: 'string',
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

