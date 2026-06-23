// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the Bastionhost instance.
   * 
   * > The description can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). Maximum 30 characters.
   * 
   * @example
   * Bastionhost demo
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1gh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For more information about regions and zones, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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

