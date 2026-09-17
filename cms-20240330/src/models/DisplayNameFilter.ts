// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisplayNameFilter extends $dara.Model {
  /**
   * @remarks
   * The inclusion keyword for the display name. Only alert rules whose display names contain this keyword are returned. Fuzzy match is supported.
   * 
   * @example
   * CPU monitoring
   */
  contains?: string;
  /**
   * @remarks
   * The exclusion keyword for the display name. Alert rules whose display names contain this keyword are excluded. Fuzzy match is supported.
   * 
   * @example
   * ARM
   */
  notContains?: string;
  static names(): { [key: string]: string } {
    return {
      contains: 'contains',
      notContains: 'notContains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contains: 'string',
      notContains: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

