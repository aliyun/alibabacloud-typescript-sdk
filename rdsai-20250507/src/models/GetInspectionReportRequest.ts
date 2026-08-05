// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInspectionReportRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID for the inspection. If this parameter is not specified, the entire report is returned. If this parameter is specified, only the content for the specified instance is returned.
   * 
   * @example
   * rm-2zep6e5u6l2yu****
   */
  instanceId?: string;
  reportType?: string;
  /**
   * @remarks
   * The inspection report ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9d246af2-a0cd-4f69-857d-3785048f****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      reportType: 'ReportType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      reportType: 'string',
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

