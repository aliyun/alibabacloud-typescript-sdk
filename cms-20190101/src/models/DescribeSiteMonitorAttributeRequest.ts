// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the returned task details include alert rules. Valid values:
   * - true: The alert rules are returned.
   * - false: The alert rules are not returned.
   * Default value: false.
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

