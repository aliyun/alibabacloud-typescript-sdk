// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationPlusResponseBodyDataSensitiveResult extends $dara.Model {
  /**
   * @remarks
   * Description
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The label
   * 
   * @example
   * 1234
   */
  label?: string;
  /**
   * @remarks
   * The sensitive data.
   */
  sensitiveData?: string[];
  /**
   * @remarks
   * The level of sensitivity data
   * 
   * @example
   * S1
   */
  sensitiveLevel?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      sensitiveData: 'SensitiveData',
      sensitiveLevel: 'SensitiveLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      sensitiveData: { 'type': 'array', 'itemType': 'string' },
      sensitiveLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveData)) {
      $dara.Model.validateArray(this.sensitiveData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

