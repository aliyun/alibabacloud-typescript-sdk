// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonSchemaRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: \\`zh\\` and \\`en\\`. The default value is \\`zh\\`.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The environment type. Valid values: \\`CS\\` (container) and \\`ECS\\`.
   * 
   * @example
   * CS
   */
  environmentType?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * 0.1.1
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

