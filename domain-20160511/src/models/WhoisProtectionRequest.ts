// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhoisProtectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dataContent?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataSource?: number;
  lang?: string;
  userClientIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  whoisProtect?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataContent: 'DataContent',
      dataSource: 'DataSource',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
      whoisProtect: 'WhoisProtect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataContent: 'string',
      dataSource: 'number',
      lang: 'string',
      userClientIp: 'string',
      whoisProtect: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

