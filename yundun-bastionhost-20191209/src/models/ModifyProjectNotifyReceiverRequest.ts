// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyProjectNotifyReceiverRequest extends $dara.Model {
  /**
   * @remarks
   * The new email address of the notification recipient.
   * 
   * @example
   * 1824***@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host instance ID.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the notification recipient. The name must be 1 to 128 characters in length, cannot start with a special character, and can contain only the following special characters: periods (.), underscores (_), hyphens (-), backslashes (\\), and spaces.
   * > If this parameter is not specified, the name remains unchanged.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The new phone number of the notification recipient.
   * 
   * @example
   * 171****5421
   */
  phone?: string;
  /**
   * @remarks
   * The ID of the notification recipient.
   * > You can call the ListProjectNotifyReceivers operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  receiverId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      instanceId: 'InstanceId',
      name: 'Name',
      phone: 'Phone',
      receiverId: 'ReceiverId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      instanceId: 'string',
      name: 'string',
      phone: 'string',
      receiverId: 'number',
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

