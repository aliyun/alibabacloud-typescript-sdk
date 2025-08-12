// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the information of the alert rules that are configured for the site monitoring task. Valid values:
   * 
   * *   true: The system returns the information of the alert rules that are configured for the site monitoring task.
   * *   false (default): The system does not return the information of the alert rules that are configured for the site monitoring task.
   * 
   * @example
   * false
   */
  includeAlert?: boolean;
  regionId?: string;
  /**
   * @remarks
   * The ID of the site monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * cc641dff-c19d-45f3-ad0a-818a0c4f****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      includeAlert: 'IncludeAlert',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeAlert: 'boolean',
      regionId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

