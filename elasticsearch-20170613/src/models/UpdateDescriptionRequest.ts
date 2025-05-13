// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDescriptionRequest extends $dara.Model {
  /**
   * @example
   * aliyunes_name_test
   */
  description?: string;
  /**
   * @remarks
   * The new name of the instance.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B350****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

