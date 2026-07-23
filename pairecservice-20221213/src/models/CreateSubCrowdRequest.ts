// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can obtain the instance ID by calling the ListInstances API.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The source of users for the sub-crowd. Valid values: ● ManualInput: manual input ● UploadFile: file upload
   * 
   * This parameter is required.
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * A comma-separated list of users in the sub-crowd.
   * 
   * This parameter is required.
   * 
   * @example
   * user1,user2,user3
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

