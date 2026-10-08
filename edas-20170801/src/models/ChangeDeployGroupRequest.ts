// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDeployGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-**********
   */
  appId?: string;
  /**
   * @remarks
   * The Elastic Compute Container (ECC) ID of the ECS instance whose group you want to change. Call the ListApplicationEcc operation to query the ECC ID of an application. For more information, see [ListApplicationEcc](https://help.aliyun.com/document_detail/199277.html).
   * 
   * > You can change the group for only one ECS instance at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0cf49a6c-95a8-4aa8******
   */
  eccInfo?: string;
  /**
   * @remarks
   * Specifies whether to force the change when the deployment package version of the ECC is different from the deployment package version of the application group.
   * 
   * @example
   * true
   */
  forceStatus?: boolean;
  /**
   * @remarks
   * The name of the application group, such as \\`group_a\\` and \\`group_b\\`. The GroupName for the default group is `_DEFAULT_GROUP`. The name can be up to 64 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
      forceStatus: 'ForceStatus',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
      forceStatus: 'boolean',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

