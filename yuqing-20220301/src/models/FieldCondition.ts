// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldCondition extends $dara.Model {
  /**
   * @example
   * xxx
   */
  fieldName?: string;
  nestFieldPath?: string;
  nestFieldValue?: number[];
  /**
   * @example
   * =
   */
  operateType?: string;
  /**
   * @example
   * yyy
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      nestFieldPath: 'nestFieldPath',
      nestFieldValue: 'nestFieldValue',
      operateType: 'operateType',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      nestFieldPath: 'string',
      nestFieldValue: { 'type': 'array', 'itemType': 'number' },
      operateType: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nestFieldValue)) {
      $dara.Model.validateArray(this.nestFieldValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

