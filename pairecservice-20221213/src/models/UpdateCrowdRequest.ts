// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrowdRequest extends $dara.Model {
  /**
   * @remarks
   * The crowd description.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID. To obtain this ID, call the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

