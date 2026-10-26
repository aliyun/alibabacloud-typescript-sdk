// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHostShareKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host shared key.
   * > This parameter is required. You can call the [ListHostShareKeys](https://help.aliyun.com/document_detail/462973.html) operation to retrieve this parameter.
   * 
   * @example
   * 11206
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to retrieve this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * > For the mappings between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostShareKeyId: 'string',
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

