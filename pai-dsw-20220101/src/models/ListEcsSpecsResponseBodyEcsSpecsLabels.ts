// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEcsSpecsResponseBodyEcsSpecsLabels extends $dara.Model {
  /**
   * @remarks
   * The label key added to the ECS specification.
   * 
   * @example
   * SupportResourcePackDeduction
   */
  key?: string;
  /**
   * @remarks
   * The label value added to the ECS specification.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

