// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLastOnceTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The source that initiated the task.
   * 
   * @example
   * console_batch
   */
  source?: string;
  /**
   * @remarks
   * The name of the task. Valid values:
   * 
   * - `CLIENT_PROBLEM_CHECK`: client troubleshooting task
   * 
   * - `CLIENT_DEV_OPS`: O\\&M task
   * 
   * - `ASSET_SECURITY_CHECK`: asset collection task
   * 
   * - `ASSETS_COLLECTION`: asset fingerprint collection task
   * 
   * - `IMAGE_SCAN`: container image scan task
   * 
   * - `AI_SECURITY_CHECK`: AI asset synchronization task
   * 
   * - `IDC_PROBE_SCAN`: IDC probe scan task
   * 
   * - `ATTACK_SURFACE_SCAN`: attack surface boundary asset scan task
   * 
   * - `ASSET_EXPOSURE_SCAN`: asset exposure scan task
   * 
   * - `VUL_CHECK_TASK`: vulnerability scan task
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
   * - `CLIENT_PROBLEM_CHECK`: client troubleshooting task
   * 
   * - `CLIENT_DEV_OPS`: O\\&M task
   * 
   * - `ASSET_SECURITY_CHECK`: asset collection task
   * 
   * - `ASSETS_COLLECTION`: asset fingerprint collection task
   * 
   * - `IMAGE_SCAN`: container image scan task
   * 
   * - `AI_SECURITY_CHECK`: AI asset synchronization task
   * 
   * - `IDC_PROBE_SCAN`: IDC probe scan task
   * 
   * - `ATTACK_SURFACE_SCAN`: attack surface boundary asset scan task
   * 
   * - `ASSET_EXPOSURE_SCAN`: asset exposure scan task
   * 
   * - `VUL_CHECK_TASK`: vulnerability scan task
   * 
   * This parameter is required.
   * 
   * @example
   * ASSETS_COLLECTION
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

