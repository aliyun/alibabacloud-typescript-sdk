// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVariableRequest extends $dara.Model {
  description?: string;
  displayName?: string;
  /**
   * @example
   * 026ca0f4-483b-4252-ae1d-1f15f056f8b9
   */
  instanceId?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  variableId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      variableId: 'VariableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      variableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

