// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDashboardNl2sqlStatusRequest extends $dara.Model {
  /**
   * @remarks
   * An array of dashboard IDs. Separate multiple IDs with commas.
   * >Notice: The number of IDs cannot exceed 50.
   * 
   * This parameter is required.
   * 
   * @example
   * asda,sadaf
   */
  dashboardIds?: string;
  /**
   * @remarks
   * The status identifier. 0 indicates disabled and 1 indicates enabled.
   * 
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

