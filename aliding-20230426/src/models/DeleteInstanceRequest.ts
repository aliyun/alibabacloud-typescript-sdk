// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceRequest extends $dara.Model {
  /**
   * @example
   * APP_PBKTxxx
   */
  appType?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * f30233fb-72xxx
   */
  processInstanceId?: string;
  /**
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      language: 'Language',
      processInstanceId: 'ProcessInstanceId',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      language: 'string',
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

