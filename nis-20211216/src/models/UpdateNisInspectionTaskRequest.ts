// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNisInspectionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the inspection task.
   * 
   * This parameter is required.
   * 
   * @example
   * ni-8svmpe0yso2bhzr7fh79
   */
  inspectionTaskId?: string;
  /**
   * @remarks
   * The running status of the task.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskId: 'InspectionTaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

