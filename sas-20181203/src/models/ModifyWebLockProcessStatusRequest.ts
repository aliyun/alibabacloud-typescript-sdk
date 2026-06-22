// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockProcessStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The identity is simultaneous processing of servers that have the same process. Valid values:
   * - **0**: Do not use simultaneous processing.
   * - **1**: Use simultaneous processing.
   * 
   * @example
   * 1
   */
  dealAll?: number;
  /**
   * @remarks
   * The operation parameters for batch setting the tamper-proofing process status. The value is in JSON format.
   * 
   * @example
   * [{"processPath":"/etc/test1","uuid":"0c1714dc-f7a3-4265-8364-7aa3fce8****"},{"processPath":"/etc/test2","uuid":"1cc45e7d-7698-4b2c-89d8-e8cba407****"}]
   */
  operateInfo?: string;
  /**
   * @remarks
   * The list of process paths.
   */
  processPath?: string[];
  /**
   * @remarks
   * The status of the tamper-proofing process. Valid values:
   * - **0**: Remove from the whitelist.
   * - **1**: Add to the whitelist.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server for which you want to set the tamper-proofing process status.
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

