// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVariableRequest extends $dara.Model {
  /**
   * @example
   * 0099b75d-60fd-4c63-8541-7fbba0ae6bb0
   */
  instanceId?: string;
  /**
   * @example
   * 0099b75d-60fd-4c63-8541-7fbba0ae6bb1
   */
  variableId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      variableId: 'VariableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

