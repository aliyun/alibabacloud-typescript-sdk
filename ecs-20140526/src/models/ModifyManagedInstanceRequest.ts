// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyManagedInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the managed instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mi-hz01nmcf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the managed instance. The name must be 2 to 128 characters in length and must start with a letter. It cannot start with a special character or a digit. The name can contain periods (.), underscores (_), hyphens (-), and colons (:). It cannot start with `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. The following regions are supported: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), Hong Kong (China), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the region IDs and other information.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

