// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonCodeTemplateRequest extends $dara.Model {
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
   * The environment type. Valid values: CS (container) and ECS.
   * 
   * @example
   * Client
   */
  environmentType?: string;
  /**
   * @remarks
   * The component version.
   * 
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

