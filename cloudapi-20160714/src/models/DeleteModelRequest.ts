// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group to which the model belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 30e792398d6c4569b04c0e53a3494381
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  modelName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      modelName: 'ModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      modelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

