// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromoteToMasterRequest extends $dara.Model {
  /**
   * @example
   * gad-bp162d4tp0500****
   */
  instanceId?: string;
  /**
   * @example
   * rm-bp1756****
   */
  masterDbInstanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
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

