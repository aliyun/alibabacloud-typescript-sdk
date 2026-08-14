// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGadInstanceNameRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the active geo-redundancy instance group.
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the active geo-redundancy instance group.
   * 
   * @example
   * rm-uf6b0m001ir8mr9i9
   */
  instanceName?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID of the task. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
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

