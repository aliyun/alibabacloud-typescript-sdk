// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DashboardFilter extends $dara.Model {
  /**
   * @example
   * test
   */
  routeName?: string;
  static names(): { [key: string]: string } {
    return {
      routeName: 'routeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

