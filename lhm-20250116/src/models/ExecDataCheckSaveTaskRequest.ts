// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDataCheckSaveTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The global parameters for the validation phase. Separate multiple parameters with a line feed (`
   * `).
   * 
   * @example
   * {}
   */
  checkGlobalParams?: string;
  /**
   * @remarks
   * Specifies whether to perform full-table validation. Valid values:
   * 
   * - 0: Partition-level validation. This is the default value.
   * - 1: Full-table validation.
   * 
   * @example
   * 0
   */
  fullTableCount?: number;
  /**
   * @remarks
   * The global parameters for the source. Separate multiple parameters with a line feed (`
   * `).
   * 
   * @example
   * {}
   */
  sourceGlobalParams?: string;
  /**
   * @remarks
   * Specifies whether to execute immediately after saving. Valid values:
   * 
   * - 0: No. This is the default value.
   * - 1: Yes.
   * 
   * @example
   * 0
   */
  startImmediately?: number;
  /**
   * @remarks
   * The global parameters for the target. Separate multiple parameters with a line feed (`
   * `).
   * 
   * @example
   * {}
   */
  targetGlobalParams?: string;
  /**
   * @remarks
   * The ID of the validation task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The total data volume comparison threshold, used to determine whether the data volume difference between the source and target is within an acceptable range.
   * 
   * @example
   * 0.5
   */
  totalCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      checkGlobalParams: 'checkGlobalParams',
      fullTableCount: 'fullTableCount',
      sourceGlobalParams: 'sourceGlobalParams',
      startImmediately: 'startImmediately',
      targetGlobalParams: 'targetGlobalParams',
      taskId: 'taskId',
      totalCountThreshold: 'totalCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkGlobalParams: 'string',
      fullTableCount: 'number',
      sourceGlobalParams: 'string',
      startImmediately: 'number',
      targetGlobalParams: 'string',
      taskId: 'number',
      totalCountThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

