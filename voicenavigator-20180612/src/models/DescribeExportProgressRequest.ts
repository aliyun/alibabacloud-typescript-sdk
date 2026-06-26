// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportProgressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the export task.
   * 
   * This parameter is required.
   * 
   * @example
   * 0de8e5ccc2b645039ae6fbda443da73f
   */
  exportTaskId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 868eef14-7515-4856-8a50-5c9a22abdbcc
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'ExportTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

