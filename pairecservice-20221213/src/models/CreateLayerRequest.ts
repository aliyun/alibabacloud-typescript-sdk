// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLayerRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the layer.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance. Call the `ListInstances` operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the laboratory. Call the `ListLaboratories` operation to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * The name of the layer.
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
      laboratoryId: 'LaboratoryId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      laboratoryId: 'string',
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

