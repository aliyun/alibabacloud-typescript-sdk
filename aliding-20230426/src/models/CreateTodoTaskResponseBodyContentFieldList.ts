// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoTaskResponseBodyContentFieldList extends $dara.Model {
  /**
   * @remarks
   * fieldKey
   * 
   * @example
   * fieldKey
   */
  fieldKey?: string;
  /**
   * @remarks
   * fieldValue
   * 
   * @example
   * fieldValue
   */
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldKey: 'fieldKey',
      fieldValue: 'fieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldKey: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

