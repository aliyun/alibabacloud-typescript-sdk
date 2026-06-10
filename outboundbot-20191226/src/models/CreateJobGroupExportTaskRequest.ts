// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * Job group ID. Required.
   * 
   * @example
   * baf6dfdc-eb79-4c63-ab19-c56388b1fbdd
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Parameters that control task execution for the import.
   * 
   * @example
   * []
   */
  option?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      option: 'Option',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      option: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.option)) {
      $dara.Model.validateArray(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

