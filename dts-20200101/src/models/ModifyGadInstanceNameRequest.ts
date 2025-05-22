// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGadInstanceNameRequest extends $dara.Model {
  /**
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @example
   * rm-uf6b0m001ir8mr9i9
   */
  instanceName?: string;
  ownerId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aek26mat2ldb4oy
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

