// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromoteToMasterRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * gad-bp162d4tp0500****
   */
  instanceId?: string;
  /**
   * @remarks
   * Primary instance ID.
   * 
   * @example
   * rm-bp1756****
   */
  masterDbInstanceId?: string;
  /**
   * @remarks
   * Region ID. Specify this parameter to indicate the region where the instance resides. For more information, see the list of supported regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Secondary instance ID.
   * 
   * @example
   * rm-bp1756****
   */
  slaveDbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      masterDbInstanceId: 'MasterDbInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      slaveDbInstanceId: 'SlaveDbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      masterDbInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      slaveDbInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

