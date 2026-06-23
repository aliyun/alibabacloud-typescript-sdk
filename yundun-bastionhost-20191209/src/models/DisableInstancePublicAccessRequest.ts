// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInstancePublicAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance for which you want to disable public network access.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the ID of the Bastionhost instance.
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

