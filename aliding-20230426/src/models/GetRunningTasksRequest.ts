// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningTasksRequest extends $dara.Model {
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
   * zh-CN
   */
  language?: string;
  /**
   * @example
   * ["xx","xxx"]
   */
  processCodes?: string;
  /**
   * @example
   * instxxxxx
   */
  processInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      language: 'Language',
      processCodes: 'ProcessCodes',
      processInstanceId: 'ProcessInstanceId',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      language: 'string',
      processCodes: 'string',
      processInstanceId: 'string',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

