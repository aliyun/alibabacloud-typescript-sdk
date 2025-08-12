// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSiteMonitorsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete the alert rules configured for the site monitoring tasks. Valid values:
   * 
   * *   true (default value)
   * *   false
   * 
   * @example
   * true
   */
  isDeleteAlarms?: boolean;
  regionId?: string;
  /**
   * @remarks
   * The IDs of the site monitoring tasks that you want to delete. Separate multiple task IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 01adacc2-ece5-41b6-afa2-3143ab5d****,43bd1ead-514f-4524-813e-228ce091****
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      isDeleteAlarms: 'IsDeleteAlarms',
      regionId: 'RegionId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDeleteAlarms: 'boolean',
      regionId: 'string',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

