// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The route name.
   * 
   * @example
   * test-route
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

