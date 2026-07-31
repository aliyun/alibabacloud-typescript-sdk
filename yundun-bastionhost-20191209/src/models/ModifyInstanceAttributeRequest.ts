// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the bastion host instance.
   * 
   * > The description can contain only letters, Chinese characters, digits, underscores (_), or hyphens (-), and cannot exceed 30 characters in length.
   * 
   * @example
   * Bastionhost demo
   */
  description?: string;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host instance.
   * > For information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

