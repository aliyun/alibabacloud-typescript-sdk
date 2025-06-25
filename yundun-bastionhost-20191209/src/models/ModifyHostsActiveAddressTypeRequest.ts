// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostsActiveAddressTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The new portal type of the host. Valid values:
   * 
   * *   **Public**: public portal
   * *   **Private**: internal portal
   * 
   * This parameter is required.
   * 
   * @example
   * Private
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The ID of the host for which you want to change the portal type. The value is a JSON string. You can add up to 100 host IDs.
   * 
   * >  You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query the ID of the host.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2"]
   */
  hostIds?: string;
  /**
   * @remarks
   * The ID of the bastion host for which you want to change the portal type of the host.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw***
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host for which you want to change the portal type of the host.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      hostIds: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

