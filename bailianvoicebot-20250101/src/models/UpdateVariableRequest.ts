// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Model Studio business unit.
   * 
   * @example
   * llm-0rxabdztx7rsdi7n
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * 用户当前年龄
   */
  description?: string;
  /**
   * @remarks
   * The display name of the variable.
   * 
   * @example
   * 年龄
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the variable.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  variableId?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      variableId: 'VariableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      description: 'string',
      displayName: 'string',
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

