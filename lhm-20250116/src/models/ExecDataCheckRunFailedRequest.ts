// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecDataCheckRunFailedRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID returned by the ExecDataCheckSaveTask operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @remarks
   * The rerun type. Valid values:
   * 
   * - 0: Reruns only execution-failed subtasks.
   * - 1: Reruns execution-failed and validation-failed subtasks.
   * - 2: Reruns execution-failed and stopped subtasks.
   * 
   * Default value: 1.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

