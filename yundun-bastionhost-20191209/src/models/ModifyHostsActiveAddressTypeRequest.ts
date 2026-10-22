// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostsActiveAddressTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The new endpoint type of the host. Valid values:
   * 
   * - **Public**: Internet
   * - **Private**: private network
   * 
   * This parameter is required.
   * 
   * @example
   * Private
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The IDs of the hosts whose endpoint types you want to modify. The value is a character string in JSON format. You can specify up to 100 host IDs.
   * You can invoke the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2"]
   */
  hostIds?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the host whose endpoint type you want to modify belongs.
   * 
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw***
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The area ID of the Bastionhost instance to which the host whose endpoint type you want to modify belongs.
   * 
   * > For more information about the mapping between area IDs and area names, see [Regions and active zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      hostIds: 'string',
      instanceId: 'string',
      projectId: 'number',
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

