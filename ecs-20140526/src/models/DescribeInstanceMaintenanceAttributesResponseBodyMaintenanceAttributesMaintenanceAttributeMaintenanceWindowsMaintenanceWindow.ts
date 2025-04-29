// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceMaintenanceAttributesResponseBodyMaintenanceAttributesMaintenanceAttributeMaintenanceWindowsMaintenanceWindow extends $dara.Model {
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 02:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

