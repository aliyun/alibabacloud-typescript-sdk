// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKTxxx
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * disagree
   */
  outResult?: string;
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
   * [{"taskId":"2291xxx","formInstId":"d84a79xxx"}, {"taskId":"2291xxx","formInstId":"f8035e2axxx"}]
   */
  taskInformationList?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      outResult: 'OutResult',
      remark: 'Remark',
      systemToken: 'SystemToken',
      taskInformationList: 'TaskInformationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      outResult: 'string',
      remark: 'string',
      systemToken: 'string',
      taskInformationList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

