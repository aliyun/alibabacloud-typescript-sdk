// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Matcher extends $dara.Model {
  /**
   * @remarks
   * The name of the metric dimension.
   * 
   * @example
   * i-fewrewr*****
   */
  label?: string;
  /**
   * @remarks
   * The matching mode of the metric dimension. Only EQUALS is supported. Default value: EQUALS.
   * 
   * @example
   * EQUALS
   */
  operator?: string;
  /**
   * @remarks
   * The value of the metric dimension.
   * 
   * @example
   * instanceId
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

