// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDashboardNl2sqlStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asda,sadaf
   */
  dashboardIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      dashboardIds: 'DashboardIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardIds: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

