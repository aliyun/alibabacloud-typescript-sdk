// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testFlowName
   */
  flowName?: string;
  /**
   * @remarks
   * The name of the time-based schedule. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      scheduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

