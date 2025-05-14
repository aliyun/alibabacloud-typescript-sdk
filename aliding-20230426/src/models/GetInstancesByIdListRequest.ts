// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancesByIdListRequest extends $dara.Model {
  /**
   * @example
   * APP_PBxxx
   */
  appType?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * inst-123,inst-223
   */
  processInstanceIds?: string;
  /**
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      language: 'Language',
      processInstanceIds: 'ProcessInstanceIds',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      language: 'string',
      processInstanceIds: 'string',
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

