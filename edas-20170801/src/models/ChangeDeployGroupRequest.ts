// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDeployGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-**********
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the elastic compute component (ECC) that corresponds to the ECS instance for which you want to change the application instance group. You can call the ListApplicationEcc operation to query the ECC ID. For more information, see [ListApplicationEcc](https://help.aliyun.com/document_detail/199277.html).
   * 
   * > You can change the application instance group for only one ECS instance at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0cf49a6c-95a8-4aa8******
   */
  eccInfo?: string;
  /**
   * @remarks
   * Specifies whether to forcibly change the application instance group if the deployment package version of the ECC is different from that of the application instance group.
   * 
   * @example
   * true
   */
  forceStatus?: boolean;
  /**
   * @remarks
   * The name of the application instance group. Examples: group_a and group_b. The parameter value for the default application instance group is `_DEFAULT_GROUP`. The name can be up to 64 characters in length.
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

