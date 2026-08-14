// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectNotifyReceiverRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the recipient.
   * > You must specify at least one of Phone or Email.
   * 
   * @example
   * 1099**@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/462953.html) operation to query this parameter.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the recipient. The name must be 1 to 128 characters in length, cannot start with a special character, and can contain only the following special characters: periods (.), underscores (_), hyphens (-), backslashes (\\), and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the recipient.
   * > You must specify at least one of Phone or Email.
   * 
   * @example
   * 131****1421
   */
  phone?: string;
  /**
   * @remarks
   * The project ID.
   * > You can call the ListProjects operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: number;
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
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      instanceId: 'string',
      name: 'string',
      phone: 'string',
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

