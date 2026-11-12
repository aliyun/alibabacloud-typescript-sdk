// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonRequest extends $dara.Model {
  /**
   * @remarks
   * The locale. Default value: zh. Valid values: zh, en.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The version of the add-on.
   * 
   * @example
   * *
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

