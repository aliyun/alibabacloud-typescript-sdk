// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMobilesCardSupportResponseBodyDataQueryResult extends $dara.Model {
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1380000****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the mobile phone number supports card messages. Valid values:
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
      mobile: 'Mobile',
      support: 'Support',
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

