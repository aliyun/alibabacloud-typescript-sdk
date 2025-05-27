// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckMobilesCardSupportResponseBodyDataQueryResult extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1390000****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the mobile phone number supports card messages.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      mobile: 'mobile',
      support: 'support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

