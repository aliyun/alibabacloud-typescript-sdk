// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The extended information field.
   * 
   * This parameter is required.
   * 
   * @example
   * {"mode":1,"problemType":"offline","uuids":"inet-795dcad1-360f-49d2-b01e-b7da7f1c****"}
   */
  param?: string;
  /**
   * @remarks
   * The source of the task.
   * 
   * @example
   * Manual
   */
  source?: string;
  /**
   * @remarks
   * The node name. Valid values:
   * - **CLIENT_PROBLEM_CHECK**: Client troubleshooting node.
   * - **CLIENT_DEV_OPS**: Cloud O&M node.
   * - **ASSET_SECURITY_CHECK**: Asset collection node.
   * - **ASSETS_COLLECTION**: Asset Fingerprints collection node.
   * - **IMAGE_SCAN**: Container image scan node.
   * - **AI_SECURITY_CHECK**: AI asset synchronization node.
   * - **IDC_PROBE_SCAN**: IDC probe scan node.
   * - **ATTACK_SURFACE_SCAN**: Attack surface border asset scan node.
   * - **ASSET_EXPOSURE_SCAN**: Asset exposure scan node.
   * - **VUL_CHECK_TASK**: Vulnerability scanning node.
   * 
   * This parameter is required.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - **CLIENT_PROBLEM_CHECK**: Client troubleshooting node.
   * - **CLIENT_DEV_OPS**: Cloud O&M node.
   * - **ASSET_SECURITY_CHECK**: Asset collection node.
   * - **ASSETS_COLLECTION**: Asset Fingerprints collection node.
   * - **IMAGE_SCAN**: Container image scan node.
   * - **AI_SECURITY_CHECK**: AI asset synchronization node.
   * - **IDC_PROBE_SCAN**: IDC probe scan node.
   * - **ATTACK_SURFACE_SCAN**: Attack surface border asset scan node.
   * - **ASSET_EXPOSURE_SCAN**: Asset exposure scan node.
   * - **VUL_CHECK_TASK**: Vulnerability scanning node.
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

