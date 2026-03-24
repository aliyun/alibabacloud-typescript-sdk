// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonCodeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh (Chinese) and en (English). Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The type of environment. Valid values: CS (Container Service) and ECS.
   * 
   * @example
   * Client
   */
  environmentType?: string;
  /**
   * @remarks
   * The version of the component.
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

