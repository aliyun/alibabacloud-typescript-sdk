// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMiningTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Webhook address
   * 
   * @example
   * https://xxxxxxxxk.com
   */
  callbackUrl?: string;
  /**
   * @remarks
   * File path
   * 
   * @example
   * 123.22.com/11.csv
   */
  filePath?: string;
  /**
   * @remarks
   * Task parameters
   * 
   * @example
   * {"startDate":"20250505"}
   */
  param?: string;
  /**
   * @remarks
   * Task type
   * 
   * @example
   * demandMining
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      callbackUrl: 'CallbackUrl',
      filePath: 'FilePath',
      param: 'Param',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      callbackUrl: 'string',
      filePath: 'string',
      param: 'string',
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

