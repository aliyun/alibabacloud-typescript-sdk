// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceByIdRequest extends $dara.Model {
  /**
   * @example
   * APP_PBxxx
   */
  appType?: string;
  /**
   * @example
   * f30233fb-72e1-xxx
   */
  id?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      id: 'Id',
      language: 'Language',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      id: 'string',
      language: 'string',
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

