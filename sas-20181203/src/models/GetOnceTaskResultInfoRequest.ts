// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnceTaskResultInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the one-time task.
   * 
   * This parameter is required.
   * 
   * @example
   * 9dfa3a7eb9547781632785b49003****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the task. Valid values:
   * 
   * - **CLIENT_PROBLEM_CHECK**: client troubleshooting task
   * 
   * - **CLIENT_DEV_OPS**: cloud O\\&M task
   * 
   * - **ASSET_SECURITY_CHECK**: asset collection task
   * 
   * - **ASSETS_COLLECTION**: asset fingerprint collection task
   * 
   * - **IMAGE_SCAN**: container image scan task
   * 
   * - **AI_SECURITY_CHECK**: AI asset synchronization task
   * 
   * - **IDC_PROBE_SCAN**: IDC probe scan task
   * 
   * - **ATTACK_SURFACE_SCAN**: attack surface and boundary asset scan task
   * 
   * - **ASSET_EXPOSURE_SCAN**: asset exposure scan task
   * 
   * - **VUL_CHECK_TASK**: vulnerability scan task
   * 
   * This parameter is required.
   * 
   * @example
   * ASSETS_COLLECTION
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * - **CLIENT_PROBLEM_CHECK**: client troubleshooting task
   * 
   * - **CLIENT_DEV_OPS**: cloud O\\&M task
   * 
   * - **ASSET_SECURITY_CHECK**: asset collection task
   * 
   * - **ASSETS_COLLECTION**: asset fingerprint collection task
   * 
   * - **IMAGE_SCAN**: container image scan task
   * 
   * - **AI_SECURITY_CHECK**: AI asset synchronization task
   * 
   * - **IDC_PROBE_SCAN**: IDC probe scan task
   * 
   * - **ATTACK_SURFACE_SCAN**: attack surface and boundary asset scan task
   * 
   * - **ASSET_EXPOSURE_SCAN**: asset exposure scan task
   * 
   * - **VUL_CHECK_TASK**: vulnerability scan task
   * 
   * This parameter is required.
   * 
   * @example
   * ASSETS_COLLECTION
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
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

