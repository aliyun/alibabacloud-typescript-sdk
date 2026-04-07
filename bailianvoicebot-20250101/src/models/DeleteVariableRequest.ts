// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVariableRequest extends $dara.Model {
  /**
   * @example
   * llm-rj6aqmctjcit4acy
   */
  businessUnitId?: string;
  /**
   * @example
   * 82ea16d1-425c-4c03-9be5-cc91de9779ed
   */
  variableId?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      variableId: 'VariableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
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

