// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the new model definition.
   * 
   * @example
   * Model Description
   */
  description?: string;
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
  /**
   * @remarks
   * The new name of the model.
   * 
   * @example
   * NewTest
   */
  newModelName?: string;
  /**
   * @remarks
   * The new definition of the model.
   * 
   * @example
   * {\\"type\\":\\"object\\",\\"properties\\":{\\"id\\":{\\"format\\":\\"int64\\",\\"maximum\\":100,\\"exclusiveMaximum\\":true,\\"type\\":\\"integer\\"},\\"name\\":{\\"maxLength\\":10,\\"type\\":\\"string\\"}}}
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      modelName: 'ModelName',
      newModelName: 'NewModelName',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      modelName: 'string',
      newModelName: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

