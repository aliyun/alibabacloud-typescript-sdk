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
   * The ID of the instance. You can call the ListInstances operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The label of the crowd.
   * 
   * @example
   * os=android
   */
  label?: string;
  /**
   * @remarks
   * The name of the crowd.
   * 
   * This parameter is required.
   * 
   * @example
   * SampleCrowd
   */
  name?: string;
  /**
   * @remarks
   * The source of the crowd. Valid values:
   * - ManualInput: Manual input.
   * - UploadFile: File upload.
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * The users included in the crowd. Separate multiple users with commas.
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

