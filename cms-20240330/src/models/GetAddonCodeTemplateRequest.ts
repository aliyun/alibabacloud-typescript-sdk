// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonCodeTemplateRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @example
   * Client
   */
  environmentType?: string;
  /**
   * @example
   * 0.1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      environmentType: 'environmentType',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      environmentType: 'string',
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

