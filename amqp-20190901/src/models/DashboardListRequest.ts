// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DashboardListRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dashboardName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      dashboardName: 'DashboardName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      dashboardName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

