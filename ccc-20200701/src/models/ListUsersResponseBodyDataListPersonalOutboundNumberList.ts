// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyDataListPersonalOutboundNumberList extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  city?: string;
  /**
   * @example
   * 0830011****
   */
  number?: string;
  province?: string;
  /**
   * @example
   * Bidirection
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      number: 'Number',
      province: 'Province',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      number: 'string',
      province: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

