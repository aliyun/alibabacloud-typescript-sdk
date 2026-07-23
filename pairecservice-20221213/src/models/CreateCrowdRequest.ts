// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the crowd.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID. To get this ID, call the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The crowd label.
   * 
   * @example
   * os=android
   */
  label?: string;
  /**
   * @remarks
   * The crowd name.
   * 
   * This parameter is required.
   * 
   * @example
   * xx人群
   */
  name?: string;
  /**
   * @remarks
   * The source of the user data. Valid values: ● ManualInput: Users are provided in the Users parameter. ● UploadFile: Users are provided from an uploaded file.
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * The users to include in the crowd. Separate multiple users with commas (,).
   * 
   * @example
   * user1,user2,user3
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      label: 'Label',
      name: 'Name',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      label: 'string',
      name: 'string',
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

