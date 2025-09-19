// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockProcessStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to change the status of the process on multiple servers on which the process runs at the same time. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  dealAll?: number;
  /**
   * @remarks
   * The parameters required to change the status of multiple processes at a time. The value is in the JSON format.
   * 
   * @example
   * [{"processPath":"/etc/test1","uuid":"0c1714dc-f7a3-4265-8364-7aa3fce8****"},{"processPath":"/etc/test2","uuid":"1cc45e7d-7698-4b2c-89d8-e8cba407****"}]
   */
  operateInfo?: string;
  /**
   * @remarks
   * The paths to the processes.
   */
  processPath?: string[];
  /**
   * @remarks
   * The status of the process. Valid values:
   * 
   * *   **0**: cancels adding the process to the process whitelist
   * *   **1**: adds the process to the process whitelist
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * bc8510e7-7327-4030-b75c-956e434d****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      dealAll: 'DealAll',
      operateInfo: 'OperateInfo',
      processPath: 'ProcessPath',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealAll: 'number',
      operateInfo: 'string',
      processPath: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processPath)) {
      $dara.Model.validateArray(this.processPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

