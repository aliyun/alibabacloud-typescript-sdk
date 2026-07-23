// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The layer description.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID. You can obtain this ID by calling the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The layer name.
   * 
   * This parameter is required.
   * 
   * @example
   * layer1
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

