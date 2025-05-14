// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedirectTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKxxx
   */
  appType?: string;
  /**
   * @example
   * y
   */
  byManager?: string;
  /**
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  nowActionExecutorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instxxxx
   */
  processInstanceId?: string;
  /**
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      byManager: 'ByManager',
      language: 'Language',
      nowActionExecutorId: 'NowActionExecutorId',
      processInstanceId: 'ProcessInstanceId',
      remark: 'Remark',
      systemToken: 'SystemToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      byManager: 'string',
      language: 'string',
      nowActionExecutorId: 'string',
      processInstanceId: 'string',
      remark: 'string',
      systemToken: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

