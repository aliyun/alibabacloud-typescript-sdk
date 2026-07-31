// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the user belongs.
   * > You can invoke [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance to which the user belongs.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user that you want to query.
   * > You can call [ListUsers](https://help.aliyun.com/document_detail/204522.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

