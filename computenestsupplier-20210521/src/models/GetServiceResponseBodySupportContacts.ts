// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodySupportContacts extends $dara.Model {
  /**
   * @remarks
   * The type of Contact information.
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The value of Contact information.
   * 
   * @example
   * supplier@test.com
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

