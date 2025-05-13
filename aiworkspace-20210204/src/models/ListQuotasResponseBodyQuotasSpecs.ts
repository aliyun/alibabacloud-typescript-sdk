// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyQuotasSpecs extends $dara.Model {
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * cu
   */
  name?: string;
  /**
   * @remarks
   * The specification type. The parameter can be left empty.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The specification value.
   * 
   * @example
   * 11500
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

