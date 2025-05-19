// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @example
   * os=android
   */
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xx人群
   */
  name?: string;
  /**
   * @example
   * ManualInput
   */
  source?: string;
  /**
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

