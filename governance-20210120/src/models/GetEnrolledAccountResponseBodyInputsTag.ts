// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnrolledAccountResponseBodyInputsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * product
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * governance
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

