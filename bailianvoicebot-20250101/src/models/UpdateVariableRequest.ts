// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVariableRequest extends $dara.Model {
  /**
   * @example
   * llm-0rxabdztx7rsdi7n
   */
  businessUnitId?: string;
  description?: string;
  displayName?: string;
  /**
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

