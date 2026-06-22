// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON string that contains additional parameters for the task.
   * 
   * This parameter is required.
   * 
   * @example
   * {"mode":1,"problemType":"offline","uuids":"inet-795dcad1-360f-49d2-b01e-b7da7f1c****"}
   */
  param?: string;
  /**
   * @remarks
   * The source that initiated the task.
   * 
   * @example
   * Manual
   */
  source?: string;
  /**
   * @remarks
   * The name of the scan task.
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * -
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the scan task. Valid values:
   * 
   * - **CLIENT_PROBLEM_CHECK**: a client troubleshooting task
   * 
   * - **CLIENT_DEV_OPS**: a cloud DevOps task
   * 
   * - **ASSET_SECURITY_CHECK**: an asset collection task
   * 
   * - **ASSETS_COLLECTION**: an asset fingerprinting task
   * 
   * - **IMAGE_SCAN**: a container image scan task
   * 
   * - **AI_SECURITY_CHECK**: an AI asset synchronization task
   * 
   * - **IDC_PROBE_SCAN**: an IDC probe scan task
   * 
   * - **ATTACK_SURFACE_SCAN**: an attack surface scan task
   * 
   * - **ASSET_EXPOSURE_SCAN**: an asset exposure scan task
   * 
   * - **VUL_CHECK_TASK**: a vulnerability scan task
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
      source: 'Source',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
      source: 'string',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

